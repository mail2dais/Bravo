/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "es", // DO NOT TRANSLATE
    enName: "Spanish", // DO NOT TRANSLATE
    name: "Español",

    strings: {
        [_.addCtrlTitle]: "Abrir",
        [_.aggregatedTableName]: "Múltiples tablas",
        [_.AnalyzeModel]: "Analizar Modelo",
        [_.analyzeModelSummary]: `Su conjunto de datos tiene <strong>{size:bytes}</strong> de largo y contiene <strong>{count}</strong> columna{{s}}`,
        [_.analyzeModelSummary2]: `, <span class=text-highlight><strong>{count}</strong>  de los cuales no {{están|está}} referenciados en el modelo.</span>`,
        [_.appName]: "Bravo for Power BI", // DO NOT TRANSLATE
        [_.appUpdateAvailable]: "Nueva versión disponible: {version}",
        [_.appUpdateChangelog]: "Registro de cambios",
        [_.appUpdateDownload]: "Descargar",
        [_.appUpdateViewDetails]: "Ver detalles",
        [_.appUpToDate]: "Bravo está actualizado",
        [_.appVersion]: "Versión {versión}",
        [_.backupReminder]: "Antes de proceder, recuerde hacer una copia de seguridad de su informe - <b>algunos cambios podrían no ser reversibles</b>.",
        [_.BestPractices]: "Buenas Prácticas",
        [_.canceled]: "Cancelado",
        [_.changeStatusAdded]: "A",
        [_.changeStatusAddedTitle]: "Añadido",
        [_.changeStatusDeleted]: "E",
        [_.changeStatusDeletedTitle]: "Eliminado",
        [_.changeStatusModified]: "M",
        [_.changeStatusModifiedTitle]: "Modificado",
        [_.clearCtrlTitle]: "Borrar",
        [_.closeCtrlTitle]: "Cerrar",
        [_.closeOtherTabs]: "Cerrar otros",
        [_.closeTab]: "Cerrar",
        [_.collapseAllCtrlTitle]: "Contraer todo",
        [_.columnExportedCompleted]: "Esta tabla se ha exportado correctamente.",
        [_.columnExportedFailed]: "Esta tabla no se exportó debido a un error no especificado.",
        [_.columnExportedTruncated]: "Esta tabla se ha limitado porque ha excedido el número máximo de filas permitidas",
        [_.columnMeasureFormatted]: "Esta medida ya tiene formato",
        [_.columnMeasureNotFormattedTooltip]: "Esta medida no tiene formato.",
        [_.columnMeasureWithError]: "Esta medida contiene errores.",
        [_.columnUnreferencedExplanation]: `<span class=text-highlight>Las columnas no referenciadas</span>  generalmente pueden ser eliminadas del modelo para optimizar el rendimiento. Antes de eliminarlas, asegúrese de que no está utilizando estas columnas en ningún informe, algo que Bravo no puede determinar.`,
        [_.columnUnreferencedTooltip]: "Esta columna no está referenciada en su modelo.",
        [_.confirmTabCloseMessage]: "Parece que no ha guardado los cambios realizados en este documento.<br>¿Quiere cerrarlo?",
        [_.connectBrowse]: "Explorar",
        [_.connectDatasetsTableEndorsementCol]: "Aprobación",
        [_.connectDatasetsTableNameCol]: "Nombre",
        [_.connectDatasetsTableOwnerCol]: "Propietario",
        [_.connectDatasetsTableWorkspaceCol]: "Área de trabajo",
        [_.connectDialogAttachPBIMenu]: "Conjuntos de datos en powerbi.com",
        [_.connectDialogConnectPBIMenu]: "Informes activos en Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "Archivos VPAX",
        [_.connectDialogTitle]: "Abrir",
        [_.connectDragFile]: "Arrastre un archivo VPAX aquí<br>o explore en su ordenador.",
        [_.connectNoReports]: "No se encontraron informes activos.<br>Abrir un informe con Power BI Desktop y esperar a que aparezca aquí.",
        [_.copiedErrorDetails]: "¡Copiado!",
        [_.copy]: "Copiar",
        [_.copyErrorDetails]: "Error de copia",
        [_.copyFormulaCtrlTitle]: "Copiar medida formateada",
        [_.copyMessage]: "Copiar Mensaje",
        [_.copyright]: "Todos los derechos están reservados",
        [_.createIssue]: "Reportar incidente",
        [_.cut]: "Cortar",
        [_.dataUsageLink]: "¿Cómo son usados tus datos?",
        [_.dataUsageMessage]: `Para darle formato a tu código, Bravo envía las medidas de este conjuto de datos a DAX Formatter, un servicio administrado por SQLBI, a través de una conexión segura. <p><strong> El servicio no almacena sus datos en ningún sitio. </strong></p><p> Alguna información como las funciones DAX más usadas, un índice de complejidad y la longitud promedio de la consulta puede guardarse con fines estadísticos.</p>`,
        [_.dataUsageTitle]: "¿Cómo son usados tus datos?",
        [_.DaxFormatter]: "Formatear DAX",
        [_.daxFormatterAgreement]: "Para formatear DAX, Bravo envía sus medidas al servicio DAX Formatter.",
        [_.daxFormatterAnalyzeConfirm]: "Para ejecutar un análisis, Bravo debe enviar todas las medidas al servicio DAX Formatter. ¿Quiere continuar?",
        [_.daxFormatterAutoPreviewOption]: "Vista previa automática",
        [_.daxFormatterFormat]: "Formato seleccionado",
        [_.daxFormatterFormatDisabled]: "Formato (no soportado)",
        [_.daxFormatterFormattedCode]: "Formateado (vista previa)",
        [_.daxFormatterOriginalCode]: "Actual",
        [_.daxFormatterPreviewAllButton]: "Vista previa de Todas las medidas",
        [_.daxFormatterPreviewButton]: "Vista previa",
        [_.daxFormatterPreviewDesc]: "Para generar una vista previa, Bravo necesita enviar esta medida al servicio de DAX Formatter",
        [_.daxFormatterSuccessSceneMessage]: "Felicidades, <strong>{count} medida{{s}}</strong> {{fue|fueron}} formateada/s con éxito.",
        [_.daxFormatterSummary]: `Su conjunto de datos contiene {count} medida{{s}}: <span class=text-error><strong>{errors:number}</strong> con errores</strong></span>, <span class=text-highlight><strong>{formattable:number}</strong>para formatear</span>, <strong>{analyzable:number}</strong> para analizar (<span class=link manual-analyze>ahora</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `Su conjunto de datos contiene <strong>{count}</strong> medida{{s}}: <span class=text-error><strong>{errors:number}</strong> con errores</strong></span> y <span class=text-highlight><strong>{formattable:number}</strong> para formatear.</span>`,
        [_.defaultTabName]: "Sin Título",
        [_.dialogCancel]: "Cancelar",
        [_.dialogOK]: "Ok",
        [_.dialogOpen]: "Abrir",
        [_.docLimited]: "Limitado",
        [_.docLimitedTooltip]: "No todas las características están disponibles para este documento.",
        [_.doneCtrlTitle]: "Hecho",
        [_.emailAddress]: "Dirección de correo electrónico",
        [_.emailAddressPlaceholder]: "Introduzca su dirección de correo electrónico",
        [_.error]: "Error",
        [_.errorAborted]: "Operación cancelada.",
        [_.errorAnalysisServicesConnectionFailed]: "Hay un problema de conexión entre el servidor y Bravo.",
        [_.errorCheckForUpdates]: "No se pueden buscar actualizaciones - el servidor remoto no está disponible.",
        [_.errorConnectionUnsupported]: "La conexión con el recurso solicitado no está soportada.",
        [_.errorDatasetConnectionUnknown]: "Conexión no especificada.",
        [_.errorDatasetsEmptyListing]: "No existen informes abiertos disponibles.",
        [_.errorDatasetsListing]: "No se puede recuperar la lista de conjuntos de datos del servicio Power BI.",
        [_.errorExportDataFileError]: "Se produjo un error durante la exportación de datos. Por favor, inténtelo de nuevo.",
        [_.errorManageDateTemplateError]: "Ocurrió una excepción al ejecutar el motor de plantillas DAX.",
        [_.errorNetworkError]: "No está conectado a Internet.",
        [_.errorNone]: "Error no especificado",
        [_.errorNotAuthorized]: "No está autorizado a visualizar el recurso especificado.",
        [_.errorNotConnected]: "No está conectado a Power Bi - Por favor, regístrese para proceder.",
        [_.errorNotFound]: "No es posible conectarse al recurso especificado.",
        [_.errorReportConnectionUnknown]: "Conexión no válida.",
        [_.errorReportConnectionUnsupportedAnalysisServicesCompatibilityMode]: "El modo de compatibilidad de la instancia de Power BI Desktop Analysis Services no es PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServicesConnectionNotFound]: "No se encontró la conexión TCP de Power BI Desktop Analysis Services.",
        [_.errorReportConnectionUnsupportedAnalysisServicesProcessNotFound]: "No se encontró el proceso de instancia de Power BI Desktop Analysis Services.",
        [_.errorReportConnectionUnsupportedConnectionException]: "Se ha producido una excepción al conectarse a la instancia de Power BI Desktop Analysis Services.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionEmpty]: "La instancia de Power BI Desktop Analysis Services no contiene ninguna base de datos. Intente conectarse al informe utilizando el ícono de Bravo en las Herramientas Externas de Power BI Desktop.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "Power BI Desktop Analysis Services contiene un número inesperado de bases de datos (> 1) cuando se esperan cero o una.",
        [_.errorReportConnectionUnsupportedProcessNotReady]: "El proceso de Power BI Desktop está abriendo o el Servicio de Analisis aún no está disponible.",
        [_.errorReportsEmptyListing]: "No hay informes sin abrir disponibles.",
        [_.errorRetry]: "Reintentar",
        [_.errorSignInMsalExceptionOccurred]: "Error inesperado en la solicitud de inicio de sesión.",
        [_.errorSignInMsalTimeoutExpired]: "La solicitud de inicio de sesión se canceló porque el tiempo de espera expiró antes de que se completara la operación.",
        [_.errorTimeout]: "Su solicitud ha expirado",
        [_.errorTitle]: "Ups…",
        [_.errorTOMDatabaseDatabaseNotFound]: "La base de datos no existe en la colección o el usuario no tiene derechos de administrador para acceder a ella",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "La actualización solicitada entra en conflicto con el estado actual del recurso de destino.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "La actualización solicitada ha fallado porque una o más medidas contienen errores.",
        [_.errorTOMDatabaseUpdateFailed]: "La actualización de la base de datos ha fallado mientras guardaba los cambios locales realizados al modelo en el servidor de la base de datos.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `La actualización solicitada ha fallado porque las siguientes medidas contienen errores:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Error no controlado - por favor repórtelo y proporcione el ID Registro, si estuviera disponible.",
        [_.errorUnspecified]: "Error no especificado.",
        [_.errorUserSettingsSaveError]: "No se puede guardar la configuración.",
        [_.errorVpaxFileExportError]: "Se ha producido un error al exportar el archivo VPAX.",
        [_.errorVpaxFileImportError]: "Se ha producido un error al importar el archivo VPAX.",
        [_.expandAllCtrlTitle]: "Expandir todo",
        [_.ExportData]: "Exportar datos",
        [_.exportDataCSVCustomDelimiter]: "Delimitador de campo personalizado",
        [_.exportDataCSVDelimiter]: "Delimitador de campos",
        [_.exportDataCSVDelimiterComma]: "Coma",
        [_.exportDataCSVDelimiterDesc]: " Seleccione el carácter a utilizar como delimitador para cada campo. De forma <em>automatica</em>  utiliza el carácter por defecto de su sistema cultural.'",
        [_.exportDataCSVDelimiterOther]: "Otros...",
        [_.exportDataCSVDelimiterPlaceholder]: "Carácter",
        [_.exportDataCSVDelimiterSemicolon]: "Punto y coma",
        [_.exportDataCSVDelimiterSystem]: "Automático",
        [_.exportDataCSVDelimiterTab]: "Tabulador",
        [_.exportDataCSVEncoding]: "Codificación",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVFolder]: "Ahorrar en una subcarpeta",
        [_.exportDataCSVFolderDesc]: "Guarde los archivos CSV generados en una subcarpeta.",
        [_.exportDataCSVQuote]: "Encerrar la cadena de datos entre comillas",
        [_.exportDataCSVQuoteDesc]: "Hay que asegurarse de que cada cadena de datos esté encerrada entre comillas dobles.",
        [_.exportDataExcelCreateExportSummary]: "Exportar el resumen",
        [_.exportDataExcelCreateExportSummaryDesc]: "Agregar una hoja adicional para exportar el archivo con el resumen del trabajo.",
        [_.exportDataExport]: "Exportar la selección",
        [_.exportDataExportAs]: "Exportar Como",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "Exportando {table}...",
        [_.exportDataExportingDone]: "¡Listo!",
        [_.exportDataNoColumns]: "Esta tabla no es exportable porque no contiene ninguna columna.",
        [_.exportDataOpenFile]: "Abrir archivo de exportación",
        [_.exportDataOpenFolder]: "Abrir carpeta de exportación",
        [_.exportDataOptions]: "Opciones de exportación",
        [_.exportDataStartExporting]: "Iniciando...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} tabla{{s}}</strong> {{fueron|fue}} exportada/s con éxito..",
        [_.exportDataSummary]: "Su conjunto de datos contiene<strong>{count} tabla{{s}}</strong> que pueden ser exportadas.",
        [_.exportDataTypeCSV]: "CSV (valores separados por comas)",
        [_.exportDataTypeXLSX]: "Hoja de cálculo Excel",
        [_.failed]: "Fallido",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Mostrar medidas sin formato/medidas con errores solamente",
        [_.filterUnrefCtrlTitle]: "Mostrar solo columnas no referenciadas",
        [_.formattingMeasures]: "Formateando medidas...",
        [_.goBackCtrlTitle]: "Cancelar y regresar",
        [_.groupByTableCtrlTitle]: "Agrupar por Tabla",
        [_.helpConnectVideo]: "Cómo Conectar",
        [_.helpCtrlTitle]: "Ayuda",
        [_.hideUnsupportedCtrlTitle]: "Sólo soportado",
        [_.less]: "Menos",
        [_.license]: "Publicado bajo licencia MIT.",
        [_.loading]: "Cargando...",
        [_.ManageDates]: "Administrar fechas",
        [_.manageDatesApplyCtrlTitle]: "Aplicar cambios",
        [_.manageDatesAuto]: "Automático",
        [_.manageDatesAutoScan]: "Exploración automática",
        [_.manageDatesAutoScanActiveRelationships]: "Relaciones Activas",
        [_.manageDatesAutoScanDesc]: "Elegir<em>Completo</em> para explorar todas las columnas que contengan fechas. Establecer <em>Elegir columnas...</em> para seleccionar las columas a utilizar. Establecer <em>Relaciones Activas</em> y <em>Relaciones Inactivas</em> para explorar únicamente las columnas que contengan relaciones.",
        [_.manageDatesAutoScanDisabled]: "Desactivado",
        [_.manageDatesAutoScanFirstYear]: "Primer Año",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "Completo",
        [_.manageDatesAutoScanInactiveRelationships]: "Relaciones inactivas",
        [_.manageDatesAutoScanLastYear]: "Último año",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "Seleccionar Columnas...",
        [_.manageDatesBrowserPlaceholder]: "No hay elementos que modificar",
        [_.manageDatesCalendarDesc]: "Elija una plantilla de calendario para aplicar a este modelo. Bravo creará o actualizará las tablas necesarias manteniendo intactas las relaciones existentes.",
        [_.manageDatesCalendarTemplateName]: "Plantilla de calendario",
        [_.manageDatesCalendarTemplateNameDesc]: "Seleccionar <em>Mensual</em> para un calendario basado en un número diferente de meses. Seleccionar <em>Semanal</em> para un calendario ISO 445-454-544. Usar <em>Personalizado</em> para calendarios flexibles con una longitud variable.",
        [_.manageDatesCreatingTables]: "Actualizando modelo...",
        [_.manageDatesDatesDesc]: "Configure el formato y la ubicación de las fechas en su modelo.",
        [_.manageDatesDatesTableDesc]: "Esta es la tabla que se utiliza en los informes para las fechas.",
        [_.manageDatesDatesTableName]: "Tabla de fechas",
        [_.manageDatesDatesTableReferenceDesc]: "Esta es una tabla oculta que contiene todas las funciones DAX utilizadas para generar fechas.",
        [_.manageDatesDatesTableReferenceName]: "Tabla de definición de fechas",
        [_.manageDatesHolidaysDesc]: "Añada días festivos a su modelo. Bravo creará las tablas necesarias o las actualizará manteniendo intactas las relaciones existentes.",
        [_.manageDatesHolidaysEnabledDesc]: "Añada la tabla de días festivos a su modelo.",
        [_.manageDatesHolidaysEnabledName]: "Días festivos",
        [_.manageDatesHolidaysTableDefinitionDesc]: "Esta es una tabla oculta que contiene todas las funciones DAX utilizadas para generar los días festivos.",
        [_.manageDatesHolidaysTableDefinitionName]: "Tabla de definición de días festivos",
        [_.manageDatesHolidaysTableDesc]: "Esta es la tabla que se utiliza en los informes para días festivos. ",
        [_.manageDatesHolidaysTableName]: "Tabla de Festivos",
        [_.manageDatesIntervalDesc]: "Seleccione un intervalo de fecha para su modelo.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "Festivos del País",
        [_.manageDatesISOCustomFormatDesc]: "Introduce un formato regional usando la etiqueta de idioma IETF BCP 47. P.ej. en-US",
        [_.manageDatesISOCustomFormatName]: "Formato personalizado",
        [_.manageDatesISOFormatDesc]: "Elegir el formato regional para fechas.",
        [_.manageDatesISOFormatName]: "Formato regional",
        [_.manageDatesISOFormatOther]: "Otro...",
        [_.manageDatesISOFormatOtherPlaceholder]: "Región",
        [_.manageDatesMenuCalendar]: "Calendario",
        [_.manageDatesMenuDates]: "Fechas",
        [_.manageDatesMenuHolidays]: "Festivos",
        [_.manageDatesMenuInterval]: "Intervalo",
        [_.manageDatesMenuPreviewCode]: "Expresión",
        [_.manageDatesMenuPreviewModel]: "Cambios de modelo",
        [_.manageDatesMenuPreviewTable]: "Datos de muestra",
        [_.manageDatesMenuPreviewTreeDate]: "Fechas",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "Fechas y Festivos",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "Inteligencia de tiempo",
        [_.manageDatesMenuTimeIntelligence]: "Inteligencia de tiempo",
        [_.manageDatesModelCheck]: "Comprobación del modelo",
        [_.manageDatesPreview]: "Vista previa de los cambios",
        [_.manageDatesPreviewCtrlTitle]: "Vista previa de los cambios",
        [_.manageDatesSampleData]: "Datos de Ejemplo",
        [_.manageDatesSampleDataError]: "No se han podido generar datos de ejemplo",
        [_.manageDatesStatusCompatible]: `<div class=hero>Este modelo ya contiene algunas <b>tablas de fechas compatibles </b> con Bravo.</div> Si cambia algo aquí, estas tablas se actualizarán y sus relaciones permanecerán intactas.`,
        [_.manageDatesStatusError]: `<div class=hero>No se puede aplicar la configuración actual.</div>{error}`,
        [_.manageDatesStatusIncompatible]: `<div class=hero>Este modelo contiene algunas<b>tablas de fechas que no son compatibles</b> con Bravo.</div>Para realizar aquí cualquier cambio, debe elegir un nombre diferente para una o más tablas que serán creadas por esta herramienta.<br><br>Comprobar <b>Fechas</b> y <b<>Festivos</b>.`,
        [_.manageDatesStatusNotAvailable]: "<div class=hero>Este modelo ya no está disponible.</div> Intente reiniciar la aplicación.'",
        [_.manageDatesStatusOk]: "<div class=hero>Este modelo <b>es compatible con la función Administrar fechas</b>.</div> Puede crear nuevas tablas de fechas sin preocuparse por romper medidas o informes.'",
        [_.manageDatesSuccessSceneMessage]: "Felicidades, su modelo se actualizó con éxito.",
        [_.manageDatesTemplateFirstDayOfWeek]: "Primer día de la semana",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "Para ISO semanal, elegir <em> Lunes</em>.",
        [_.manageDatesTemplateFirstFiscalMonth]: "Primer Mes del año",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "Para ISO semanal, elegir <em> Enero</em>.",
        [_.manageDatesTemplateMonthsInYear]: "Meses del año",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "Estándar",
        [_.manageDatesTemplateNameConfig02]: "Mensualmente",
        [_.manageDatesTemplateNameConfig03]: "Personalizado",
        [_.manageDatesTemplateNameConfig04]: "Semanal",
        [_.manageDatesTemplateQuarterWeekType]: "Sistema Semanal",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "Fecha de definir el año fiscal",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "Para ISO Semanal, eslegir<em>Último del año</em>.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "Primero del año",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "Último del año",
        [_.manageDatesTemplateWeeklyType]: "Último día Laborable del año",
        [_.manageDatesTemplateWeeklyTypeDesc]: "Si su semana comienza el domingo, entonces el último día de la semana es el sábado. Si elige <em>Último del año</em> el año fiscal finaliza el último sábado del último mes. De lo contrario, el año fiscal termina el sábado más cercano al último día del último mes; podría ser en el próximo año. Para ISO semanal, elija<em>Más cercano al final del año</em>.",
        [_.manageDatesTemplateWeeklyTypeLast]: "Último del año",
        [_.manageDatesTemplateWeeklyTypeNearest]: "Más cercano al fin de año",
        [_.manageDatesTimeIntelligenceDesc]: "Cree las funciones de DAX de Inteligencia de Tiempo más comunes disponibles en su modelo.",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Funciones de Inteligencia de Tiempo",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "Todas las medidas",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "Elegir la medidas...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "Elegir la medida utilizada para generar las funciones de Inteligencia de Tiempo.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "Medidas Objetivo",
        [_.manageDatesYearRange]: "Intervalo de fechas",
        [_.manageDatesYearRangeDesc]: "Escoger cómo determinar el intervalo de fechas del modelo. Dejar <em>Primer Año</em> y/o <em>Último Año</em> vacío para utilizar el escaneo automático.",
        [_.menuCtrlTitle]: "Contraer/Expandir el menú",
        [_.minimizeCtrlTitle]: "Minimizar",
        [_.modelLanguage]: "Idioma del modelo({culture})",
        [_.more]: "Más",
        [_.notificationCtrlTitle]: "Notificaciones",
        [_.notificationsTitle]: "{count} notificación{{es}}",
        [_.openSourcePayoff]: "{appName} es un herramienta de código abierto desarrollada y mantenida por SQLBI y la comunidad de Github. Únase a nosotros en",
        [_.openWithDaxFormatterCtrlTitle]: "Dar formato en linea con DAX Formatter",
        [_.optionAccount]: "Cuenta de Power BI",
        [_.optionAccountDescription]: "Configurar la cuenta para acceder a los conjuntos de datos en el servicio de Power BI.",
        [_.optionCheckForUpdates]: "Verifique automáticamente las actualizaciones",
        [_.optionDiagnostic]: "Nivel de diagnóstico",
        [_.optionDiagnosticDescription]: "Mostrar errores y registros en un panel de diagnóstico.  Seleccionar <em>Básico</em> para registrar solo algunos mensajes. O <em>Completo</em> para registrar todos los mensajes.",
        [_.optionDiagnosticLevelBasic]: "Básico",
        [_.optionDiagnosticLevelNone]: "Ninguno",
        [_.optionDiagnosticLevelVerbose]: "Completo",
        [_.optionDiagnosticMore]: "Para informar de un problema en la aplicación, por favor use",
        [_.optionFormattingBreaks]: "Expresión de nombre truncada",
        [_.optionFormattingBreaksAuto]: "Auto",
        [_.optionFormattingBreaksDescription]: "Elegir cómo separar el nombre y la expresión de la medida. Seleccionar <em>Auto</em> para determinar automáticamente el estilo utilzado en el modelo.",
        [_.optionFormattingBreaksInitial]: "Salto de línea",
        [_.optionFormattingBreaksNone]: "Misma línea",
        [_.optionFormattingIncludeTimeIntelligence]: "Incluir inteligencia de tiempo",
        [_.optionFormattingIncludeTimeIntelligenceDescription]: "Incluya medidas creadas automáticamente por administrar fechas para la inteligencia del tiempo.",
        [_.optionFormattingLines]: "Líneas",
        [_.optionFormattingLinesDescription]: "Elegir el tamaño de las líneas.",
        [_.optionFormattingLinesValueLong]: "Líneas largas",
        [_.optionFormattingLinesValueShort]: "Líneas cortas",
        [_.optionFormattingPreview]: "Previsualización automática ",
        [_.optionFormattingPreviewDescription]: "Enviar automáticamente las medidas a DAX Formatter para generar la vista previa",
        [_.optionFormattingSeparators]: "Separadores",
        [_.optionFormattingSeparatorsDescription]: "Elegir los separadores para números y listas.",
        [_.optionFormattingSeparatorsValueAuto]: "Auto",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "Espaciado",
        [_.optionFormattingSpacesDescription]: "Administrar los espacios después de los nombres de las funciones.",
        [_.optionFormattingSpacesValueBestPractice]: "Mejores prácticas",
        [_.optionFormattingSpacesValueFalse]: "Sin espacio - IF(",
        [_.optionFormattingSpacesValueTrue]: "Espacio - IF (",
        [_.optionInvalidValue]: "Valor no válido",
        [_.optionLanguage]: "Idioma",
        [_.optionLanguageDescription]: "Cambiar Idioma de Bravo. Es necesario reiniciar.",
        [_.optionLanguageResetConfirm]: "¿Quiere reiniciar Bravo para aplicar el nuevo idioma?",
        [_.optionProxyAddress]: "Dirección del servidor proxy",
        [_.optionProxyAddressDescription]: "Proporcione la dirección de su servidor proxy.",
        [_.optionProxyBypassList]: "Excluir la lista de direcciones",
        [_.optionProxyBypassListDescription]: "Use el servidor proxy excepto las direcciones que comienzan con las entradas insertadas.Use Semicolons (;) para separar las entradas.",
        [_.optionProxyBypassOnLocal]: "Evitar direcciones locales",
        [_.optionProxyBypassOnLocalDescription]: "No use el proxy con direcciones locales (intranet).",
        [_.optionProxyConfirmDeleteCredentials]: "¿Seguro que eliminará las credenciales personalizadas del sistema?",
        [_.optionProxyCustomCredentials]: "Credenciales personalizadas",
        [_.optionProxyCustomCredentialsDescription]: "Use credenciales personalizadas para autenticar en el servidor proxy.Dejar para usar las credenciales del sistema.",
        [_.optionProxyCustomCredentialsEdit]: "Editar credenciales personalizadas",
        [_.optionProxyType]: "Servidor proxy",
        [_.optionProxyTypeCustom]: "Costumbre",
        [_.optionProxyTypeDescription]: "Elija un servidor proxy.",
        [_.optionProxyTypeNone]: "Ninguna",
        [_.optionProxyTypeSystem]: "Sistema",
        [_.optionsDialogAboutMenu]: "Acerca de",
        [_.optionsDialogFormattingMenu]: "Formateado",
        [_.optionsDialogGeneralMenu]: "General",
        [_.optionsDialogProxyMenu]: "Apoderada",
        [_.optionsDialogTelemetryMenu]: "Diagnósticos",
        [_.optionsDialogTitle]: "Opciones",
        [_.optionTelemetry]: "Telemetría",
        [_.optionTelemetryDescription]: "Enviar datos de uso a SQLBI de forma anónima.",
        [_.optionTelemetryMore]: "Ayúdenos a entender cómo usa Bravo para mejorarlo. No recogemos ningún tipo de información personal. Si desactiva esta opción, el equipo de desarrollo no podrá hacer seguimiento a los errores o proporcionar información adicional o soporte.",
        [_.optionTheme]: "Tema",
        [_.optionThemeDescription]: "Establecer el tema de Bravo. La opcion preseleccionada <em>Sistema</em> permite que el sistema operativo elija.",
        [_.optionThemeValueAuto]: "Sistema",
        [_.optionThemeValueDark]: "Oscuro",
        [_.optionThemeValueLight]: "Claro",
        [_.otherColumnsRowName]: "Reduciento tamaño de columnas ...",
        [_.paste]: "Pegar",
        [_.powerBiObserving]: "Abriendo el archivo en Power BI Desktop...",
        [_.powerBiObservingCancel]: "Cancelar",
        [_.powerBiSigninDescription]: "Iniciar sesión en el serivicio de Power BI Service para conectar Bravo a sus conjuntos de datos en el servicio",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Adjuntar a Power BI Desktop",
        [_.quickActionConnectPBITitle]: "Conectarse al servicio Power BI",
        [_.quickActionOpenVPXTitle]: "Abrir un archivo del Analizador Vertipaq",
        [_.refreshCtrlTitle]: "Actualizar",
        [_.refreshPreviewCtrlTitle]: "Actualizar vista previa",
        [_.saveVpaxCtrlTile]: "Guardar como VPAX",
        [_.savingVpax]: "Generando VPAX...",
        [_.sceneUnsupportedReason]: "Esta función no está disponible para esta fuente de datos.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `Los modelos con la opción de fecha/hora automática activada no son compatibles.<br><span class=link href=https://www.sqlbi.com/tv/disabling-auto-date-time-in-power-bi/> Deshabilitar fecha y hora automática en Power BI (vídeo)</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "Esta función sólo es compatible con las bases de datos que tienen al menos una tabla.",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "Esta función sólo es compatible con los modelos en modo Power BI Desktop.",
        [_.sceneUnsupportedReasonMetadataOnly]: "La base de datos fue generada por un archivo VPAX, que incluye solo su metadata.",
        [_.sceneUnsupportedReasonReadOnly]: "La conexión a esta base de datos es de sólo lectura.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "El punto de conexión XMLA no es compatible con este conjunto de datos.",
        [_.sceneUnsupportedTitle]: "No Compatible",
        [_.searchColumnPlaceholder]: "Buscar Columna",
        [_.searchDatasetPlaceholder]: "Buscar Conjunto de Datos",
        [_.searchEntityPlaceholder]: "Buscar Tabla/Columna",
        [_.searchMeasurePlaceholder]: "Buscar Medida",
        [_.searchPlaceholder]: "Buscar",
        [_.searchTablePlaceholder]: "Buscar Tabla",
        [_.settingsCtrlTitle]: "Opciones",
        [_.sheetOrphan]: "No disponible",
        [_.sheetOrphanPBIXTooltip]: "El informe se ha cerrado en Power BI Desktop. Cualquier operación de escritura no está permitida.",
        [_.sheetOrphanTooltip]: "Este modelo ya no está disponible. Cualquier operación de escritura no está permitida.",
        [_.showDiagnosticPane]: "Mostrar detalles",
        [_.sideCtrlTitle]: "Alternar la vista en paralelo",
        [_.signedInCtrlTitle]: "Iniciada sesión como {nombre}",
        [_.signIn]: "Iniciar Sesión",
        [_.signInCtrlTitle]: "Iniciar Sesión",
        [_.signOut]: "Cerrar Sesión",
        [_.sqlbiPayoff]: "Bravo es un proyecto de SQLBI.",
        [_.syncCtrlTitle]: "Sincronizar",
        [_.tableColCardinality]: "Cardinalidad",
        [_.tableColCardinalityTooltip]: "Número de elementos únicos",
        [_.tableColColumn]: "Columna",
        [_.tableColColumns]: "Columnas",
        [_.tableColMeasure]: "Medida",
        [_.tableColPath]: "Tabla \\ Columna",
        [_.tableColRows]: "Filas",
        [_.tableColSize]: "Tamaño",
        [_.tableColTable]: "Tabla",
        [_.tableColWeight]: "Peso",
        [_.tableSelectedCount]: "{count} Seleccionado",
        [_.tableValidationInvalid]: "No se puede usar este nombre",
        [_.tableValidationValid]: "El nombre es válido",
        [_.themeCtrlTitle]: "Cambiar Tema",
        [_.toggleTree]: "Desplegar árbol",
        [_.traceId]: "Rastro ID",
        [_.unknownMessage]: "Mensaje inválido recibido",
        [_.updateChannelBeta]: "Beta",
        [_.updateChannelCanary]: "Test de producción",
        [_.updateChannelDev]: "Desarrollo",
        [_.updateChannelStable]: "Estable",
        [_.updateMessage]: "Una nueva versión de Bravo está disponible: {versión}",
        [_.validating]: "Validando...",
        [_.version]: "Versión",
        [_.welcomeHelpText]: "Ver los siguientes videos para aprender a utilizar Bravo:",
        [_.welcomeHelpTitle]: "¿Cómo usar Bravo?",
        [_.welcomeText]: "Bravo es un práctico kit de herramientas de Power BI que puede usar para analizar sus modelos, formatear medidas, crear tablas de fechas y exportar datos.",
        [_.whitespacesTitle]: "Espacios en blanco",
        [_.wrappingTitle]: "Ajuste automático de línea",
    }
}
export default locale;