

import type { MouseEvent } from "react";
import "../barraNavegacao/barraNavegacao.css";

export default function ModalNav({ onClose }: any) {
  const handleCloseClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div id="modal" onClick={handleCloseClick}>
      <div className="modal-box">
        <div>
          <a
            className="mb-4 hover custom-link text-black text-decoration-none nav-link"
            href="#inicio"
            onClick={onClose}
          >
            Início
          </a>
          <a
            className="mb-4 hover custom-link text-black text-decoration-none nav-link"
            href="#sobreMim"
            onClick={onClose}
          >
            Sobre mim
          </a>
          <a
            className="mb-4 hover custom-link text-black text-decoration-none nav-link"
            href="#skills"
            onClick={onClose}
          >
            Habilidades
          </a>
          <a
            className="mb-4 hover custom-link text-black text-decoration-none nav-link"
            href="#projetos"
            onClick={onClose}
          >
            Projetos
          </a>
          <button onClick={onClose} className="custom-button custom-button-close">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}