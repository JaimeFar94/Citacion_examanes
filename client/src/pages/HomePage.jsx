import { toast } from "react-hot-toast";
import { useState } from "react";
import { CreateaExam } from "../api/info-list.api";
import PDF from "../components/PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { HiDocumentDownload } from "react-icons/hi";
import { MdDownloading } from "react-icons/md";
import { IoDocument } from "react-icons/io5";

export function HomePage() {
  const [nombre, setNombre] = useState("");
  const [grado_actual, setgrado_actual] = useState("");
  const [grado_presenta, setgrado_presenta] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [costo, setCosto] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitted(false);

    // Validación rápida
    if (
      !nombre ||
      !grado_actual ||
      !grado_presenta ||
      !fecha ||
      !hora ||
      !costo
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      await toast.promise(
        CreateaExam({
          nombre,
          grado_actual,
          grado_presenta,
          fecha,
          hora,
          costo,
        }),
        {
          loading: "Registrando examen...",
          success: "Alumno registrado correctamente",
          error: "Error al registrar usuario",
        },
        {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#14d5be",
          },
        }
      );

      // Marcar como enviado para habilitar la descarga
      setIsSubmitted(true);
    } catch (error) {
      setError(error.message || "Error al guardar información");
    }
  };

  const data = {
    nombre,
    grado_actual,
    grado_presenta,
    fecha,
    hora,
    costo,
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-xl">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-extrabold text-center text-red-700 mb-6">
          CITACIÓN PARA EXÁMEN DE ASCENSO
        </h1>

        {error && (
          <p className="text-red-600 text-sm font-semibold mb-4">{error}</p>
        )}

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div>
            <label className="block text-green-700 font-semibold mb-1">
              NOMBRE DEL ALUMNO
            </label>
            <input
              type="text"
              placeholder="Nombre Alumno"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">
              GRADO ACTUAL
            </label>
            <input
              type="text"
              placeholder="Grado Actual"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={grado_actual}
              onChange={(e) => setgrado_actual(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">
              GRADO AL QUE PRESENTA
            </label>
            <input
              type="text"
              placeholder="Grado al que presenta"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={grado_presenta}
              onChange={(e) => setgrado_presenta(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">
              DÍA
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">
              HORA
            </label>
            <input
              type="time"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">
              VALOR
            </label>
            <input
              type="number"
              placeholder="350000"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
              required
            />
          </div>

          {/* Botón de enviar formulario */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-700 hover:bg-green-600 text-white font-bold rounded-lg shadow flex items-center justify-center gap-2 transition"
          >
            <IoDocument size={20} />
            Registrar Examen
          </button>
        </form>

        {/* Botón de descargar PDF - Solo visible después de enviar el formulario */}
        {isSubmitted && (
          <div className="mt-6">
            <PDFDownloadLink
              document={<PDF {...data} />}
              fileName={`Citacion_${nombre.replace(/\s+/g, "_")}.pdf`}
              className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              {({ loading }) => (
                <>
                  {loading ? (
                    <>
                      <MdDownloading /> Generando PDF...
                    </>
                  ) : (
                    <>
                      <HiDocumentDownload /> Descargar PDF
                    </>
                  )}
                </>
              )}
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>
  );
}
