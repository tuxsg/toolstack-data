({
    // Layout
    CREATE_STATUS_REPORT: "Crear informe de estado",
    REPORT_WELCOME: "Bienvenido",
    REPORT_DESCRIPTION: "Este asistente permite recopilar información de diagnóstico de este sistema.<br/><ul><li>Recopilará la salida de dmesg de Xen, detalles sobre la configuración de hardware del equipo, información sobre la compilación de Xen que se está usando, además de varios registros.<br/><br/></li><li>La información recopilada se podrá descargar como un archivo .tar.bz2 para poder almacenarse o enviarse a un representante de asistencia técnica.</li></ul>",
    REPORT_VM_DESCRIPTION: "Esta herramienta puede, de forma optativa, obtener información de diagnóstico de las VM, incluidos los registros y capturas de pantalla de las VM que se estén ejecutando actualmente. Esto puede resultar muy útil para diagnosticar problemas técnicos.",
    REPORT_INCLUDE_VMSCREENS: "Incluir capturas de pantalla de las VM en este informe",
    REPORT_INCLUDE_VMS: "Incluir otra información de diagnóstico de las VM en este informe",
    REPORT_INFO: "Los registros pueden contener información privada. Si esto es motivo de preocupación, excluya explícitamente los registros de VM del informe. Si opta por excluir la información sobre VM del informe, puede que el problema no pueda diagnosticarse correctamente.",
    REPORT_SUMMARY: "Descripción",
    REPORT_DETAILS: "Introduzca un resumen del problema y una descripción detallada",
    SUMMARY_LABEL: "Resumen:",
    SUMMARY_VALERROR: "Hay que suministrar un resumen. No puede tener más de 60 caracteres y puede contener letras, números, espacios y ciertos signos de puntuación (guiones bajos, guiones, corchetes, puntos, apóstrofes y comas).",
    DESCRIPTION_LABEL: "Descripción:",
    REPORT_SUMMARY_INFO: "Intente no usar más de ocho palabras en el resumen.",
    REPORT_STEPS: "Reproducción",
    REPORT_REPRO: "Describa, si es posible, los pasos exactos para reproducir el problema.",
    REPORT_REPRO_LABEL: "Pasos para reproducir:",
    REPORT_TICKET: "Si tiene un número de caso o tíquet de asistencia técnica, introdúzcalo aquí.",
    REPORT_TICKET_LABEL: "Número:",
    REPORT_GENERATION: "Generación",
    REPORT_SERVER_DESCRIPTION: "Una vez generado el informe, este asistente permitirá la descarga del mismo, ejecutando temporalmente un servidor Web dedicado en este equipo. Luego podrá introducir la dirección URL en su explorador Web.<br/><br/>Si no quiere descargarlo en estos momentos, deje esta casilla sin marcar.",
    REPORT_SERVER: "Habilitar la descarga del informe una vez generado",
    REPORT_FINISHED: "El asistente ha recopilado información suficiente para generar un informe de estado.<br/><br/>Consulte sus entradas y haga clic en Siguiente para generar el informe.",
    GENERATING_REPORT: "Generando el informe. Espere...",
    STATUS_SERVER_INFO: "Sólo debe permitirse la descarga de informes si la red donde se encuentra el equipo es segura y el administrador le permite hacerlo.",
    REPORT_FINISH: "Finalizar",
    REPORT_CREATED: "El informe de estado siguiente se ha creado correctamente:<br/><br/><strong>{0}</strong>",
    REPORT_FINISH_SERVER: "Para descargar el informe, use la sección Informe de estado en Parámetros del sistema.",
    STOP_SERVER: "Si cierra este asistente los informes no estarán disponibles para la descarga.",
    SERVE_REPORT: "Los informes están disponibles para su descarga en otro equipo en:\n\n{0}\n\nEstán disponibles para descargarse en las VM de este equipo en:\n\n{1}"
})