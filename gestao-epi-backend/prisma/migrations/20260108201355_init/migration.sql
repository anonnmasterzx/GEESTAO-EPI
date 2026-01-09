BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Epi] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigo] NVARCHAR(1000) NOT NULL,
    [tipo] NVARCHAR(1000) NOT NULL,
    [descricao] NVARCHAR(1000) NOT NULL,
    [CA] NVARCHAR(1000),
    [validadeCA] DATETIME2,
    [vidaUtilMeses] INT NOT NULL CONSTRAINT [Epi_vidaUtilMeses_df] DEFAULT 0,
    [fabricante] NVARCHAR(1000),
    [estoqueMinimo] INT NOT NULL CONSTRAINT [Epi_estoqueMinimo_df] DEFAULT 0,
    CONSTRAINT [Epi_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Epi_codigo_key] UNIQUE NONCLUSTERED ([codigo])
);

-- CreateTable
CREATE TABLE [dbo].[Colaborador] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nome] NVARCHAR(1000) NOT NULL,
    [matricula] NVARCHAR(1000) NOT NULL,
    [setor] NVARCHAR(1000),
    [funcao] NVARCHAR(1000),
    [ativo] BIT NOT NULL CONSTRAINT [Colaborador_ativo_df] DEFAULT 1,
    CONSTRAINT [Colaborador_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Colaborador_matricula_key] UNIQUE NONCLUSTERED ([matricula])
);

-- CreateTable
CREATE TABLE [dbo].[MovimentacaoEpi] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [epiId] INT NOT NULL,
    [colaboradorId] INT NOT NULL,
    [dataHora] DATETIME2 NOT NULL CONSTRAINT [MovimentacaoEpi_dataHora_df] DEFAULT CURRENT_TIMESTAMP,
    [tipo] NVARCHAR(1000) NOT NULL,
    [quantidade] INT NOT NULL,
    [responsavel] NVARCHAR(1000) NOT NULL,
    [observacao] NVARCHAR(1000),
    [lote] NVARCHAR(1000),
    CONSTRAINT [MovimentacaoEpi_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [MovimentacaoEpi_colaboradorId_dataHora_idx] ON [dbo].[MovimentacaoEpi]([colaboradorId], [dataHora]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [MovimentacaoEpi_epiId_dataHora_idx] ON [dbo].[MovimentacaoEpi]([epiId], [dataHora]);

-- AddForeignKey
ALTER TABLE [dbo].[MovimentacaoEpi] ADD CONSTRAINT [MovimentacaoEpi_epiId_fkey] FOREIGN KEY ([epiId]) REFERENCES [dbo].[Epi]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[MovimentacaoEpi] ADD CONSTRAINT [MovimentacaoEpi_colaboradorId_fkey] FOREIGN KEY ([colaboradorId]) REFERENCES [dbo].[Colaborador]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
