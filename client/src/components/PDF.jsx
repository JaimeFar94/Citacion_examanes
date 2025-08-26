import { Document, Text, Page, StyleSheet, Image, View } from "@react-pdf/renderer";
import Changhun from "../Images/Changhun.png";


const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Times-Roman",
    lineHeight: 1.5,
    backgroundColor: "#ffffffff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 10,
    color: "#1a1a1a",
  },
  section: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    width: "40%",
    fontWeight: "bold",
    fontSize: 12,
  },
  value: {
    width: "60%",
    fontSize: 12,
  },
  requisitosTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
  },
  requisito: {
    marginBottom: 6,
    textAlign: "justify",
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});

function PDF({ nombre, grado_actual, grado_presenta, fecha, hora, costo }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    try {
      const [hours, minutes] = timeString.split(":");
      return `${hours}:${minutes}`;
    } catch (error) {
      return timeString;
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Image src={Changhun} style={styles.logo} />
          <Text style={styles.title}>CITACIÓN PARA EXÁMEN DE ASCENSO</Text>
        </View>

        {/* Datos del alumno */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>ALUMNO:</Text>
            <Text style={styles.value}>{nombre || "[Nombre del alumno]"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>GRADO ACTUAL:</Text>
            <Text style={styles.value}>{grado_actual || "[Grado actual]"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>GRADO AL QUE PRESENTA:</Text>
            <Text style={styles.value}>{grado_presenta || "[Grado que presenta]"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>DÍA:</Text>
            <Text style={styles.value}>{formatDate(fecha) || "[Fecha]"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>HORA:</Text>
            <Text style={styles.value}>{formatTime(hora) || "[Hora]"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>COSTO:</Text>
            <Text style={styles.value}>
              {costo ? `$${Number(costo).toLocaleString("es-ES")}` : "[Costo]"}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Requisitos */}
        <Text style={styles.requisitosTitle}>REQUISITOS PARA EXÁMENES DE ASCENSO</Text>
        <View>
          <Text style={styles.requisito}>• Haber completado el tiempo mínimo requerido en el grado y desarrollado su tema actual totalmente.</Text>
          <Text style={styles.requisito}>• Tener mínimo el 85% de asistencia con respecto al tiempo establecido para cada grado.</Text>
          <Text style={styles.requisito}>• Mostrar progreso en su actitud práctica y disciplinaria.</Text>
          <Text style={styles.requisito}>• Haber recibido la aprobación correspondiente por parte de su instructor a cargo.</Text>
          <Text style={styles.requisito}>• Estar pendiente del día y hora señalados... no se aceptan entradas tarde.</Text>
          <Text style={styles.requisito}>• Presentarse con el cabello recogido, uñas cortas, uniforme limpio y escudos reglamentarios.</Text>
          <Text style={styles.requisito}>• Estar a paz y salvo con la Academia y haber cancelado el valor del examen.</Text>
          <Text style={styles.requisito}>• Quien no llegue oportunamente deberá esperar hasta la próxima fecha. Se recomienda llegar 20 min antes.</Text>
        </View>

        {/* Pie */}
        <Text style={styles.footer}>Mil Gracias</Text>
      </Page>
    </Document>
  );
}

export default PDF;
