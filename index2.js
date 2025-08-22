const respuestas = {
      "hola": "¡Hola! Soy Kichi tu asistente virtual de la UAGRO, ¿En qué puedo ayudarte?",
      "nucleopdf": "Abriendo Nucleo Academico PDF...",
      "matriculadospdf": "Abriendo ESTUDIANTES MATRICULADOS PDF...",
      "estructuraglobal2014pdf": "Abriendo ESTRUCTURA GENERAL 2014 PDF...",
      "estructuralgacpdf": "Abriendo ESTRUCTURA POR LGAC PDF...",
      "cursos2014pdf": "Abriendo CURSOS  2014 PDF...",
     "ingresopdf": "Abriendo INGRESO PDF...",
     "egresopdf": "Abriendo EGRESO PDF...",
     "objetivospdf": "Abriendo OBJETIVOS PDF...",
     "estructuraglobal2024pdf": "Abriendo ESTRUCTURA GENERAL 2024 PDF...",
     "estructuraliespdf": "Abriendo ESTRUCTURA LIES PDF...", 
     "cursos2024pdf": "Abriendo CURSOS  2024 PDF...",
     "lgacpdf": "Abriendo LGAC PDF...",
     "trayectoriapdf": "Abriendo TRAYECTORIA PDF...",
     "tutoriaspdf": "Abriendo TUTORIAS PDF...",
     "docentespdf": "Abriendo ESTANCIAS DOCENTES PDF...",
     "estudiantespdf": "Abriendo ESTANCIAS ESTUDIANTES PDF...",
     "instalacionespdf": "Abriendo INSTALACIONES UAGRO MIIDT PDF...",
      "ayuda": "Para más información por favor consulta la página ofiacial de la MIIDT https://www.posgradoingenieria.uagro.mx/index.php#.",
      "link pdf": "Abriendo Link PDF...",
      "adiós": "¡Hasta luego!",
      
    };

    function enviarMensaje() {
      const input = document.getElementById("entrada");
      const mensajeUsuario = input.value.trim();
      if (mensajeUsuario === "") return;

      agregarMensaje("Tú: " + mensajeUsuario, "usuario");
      const clave = mensajeUsuario.toLowerCase();
      const respuesta = respuestas[clave] || "Lo siento, no entiendo tu mensaje.";

      agregarMensaje("Kichi: " + respuesta, "Kichi");

      // Mostrar PDF si coincide con alguna clave
      if ( clave === "nucleopdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Nucleo%20Academico.pdf"); // Puedes cambiar esto al nombre real del PDF
      }
      if ( clave === "link pdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Link.pdf"); // Puedes cambiar esto al nombre real del PDF
      }
      
      if ( clave === "matriculadospdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/ESTUDIANTES%20MATRICULADOS.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

     if ( clave === "estructuraglobal2014pdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/ESTRUCTURA%20GENERAL.pdf"); // Puedes cambiar esto al nombre real del PDF
      }
      if ( clave === "estructuralgacpdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/estructura-por-especializacion-28042023.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "cursos2014pdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/cursos-2023.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

     if ( clave === "ingresopdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Perfil%20de%20ingreso%201.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "egresopdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Perfil%20de%20egreso.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "objetivospdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Perfil%20de%20objetivos.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "estructuraglobal2024pdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/estructuraglobal%202024.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "estructuraliespdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/estructura-por-especializacion-2024.pdf"); // Puedes cambiar esto al nombre real del PDF
      }


       if ( clave === "cursos2024pdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/cursos-2024.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "lgacpdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/LGAC.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "trayectoriapdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/direci%C3%B3n%20de%20tesis.pdf"); // Puedes cambiar esto al nombre real del PDF
      }
   
     if ( clave === "tutoriaspdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Tutorias.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

     if ( clave === "docentespdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/ESTANCIA%20DOCENTES.pdf"); // Puedes cambiar esto al nombre real del PDF
      }

      if ( clave === "estudiantespdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/ESTANCIA%20ESTUDIANTES.pdf"); // Puedes cambiar esto al nombre real del PDF
      } 
      
     if ( clave === "instalacionespdf") {
        mostrarPDF("file:///C:/Users/ASUS/Desktop/ESTANCIA/Instalaciones.pdf"); // Puedes cambiar esto al nombre real del PDF
      } 


      input.value = "";
    }

    function agregarMensaje(texto, clase) {
      const chatbox = document.getElementById("chatbox");
      const div = document.createElement("div");
      div.textContent = texto;
      div.className = "mensaje " + clase;
      chatbox.appendChild(div);
      chatbox.scrollTop = chatbox.scrollHeight;
    }

    function mostrarPDF(ruta) {
      const visor = document.getElementById("visorPDF");
      visor.src = ruta;
      visor.style.display = "block";
    }

    // Permitir enviar con Enter
    document.getElementById("entrada").addEventListener("keydown", function(e) {
      if (e.key === "Enter") enviarMensaje();
    });

