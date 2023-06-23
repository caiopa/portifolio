

export default function ModalNav({ onClose }: any) {
  const handleCloseClick = (event: any /* Event */) => {
    const target = event.target;
  
    if (!target.classList.contains('modal-box')) {
      onClose();
    }
  };
  return (
  <div id="modal" onClick={(e) => handleCloseClick(e)}>
    <div  className="modal-box">
      <div className="flex flex-col justify-center align-center ">
          <a className="mb-4 hover custom-link text-black text-decoration-none nav-link" href="#inicio">
            Início
          </a>
          <a className="mb-4 hover text-black text-decoration-none nav-link" href="#sobreMim">
            Sobre mim
          </a>
          <a className="mb-4 hover text-black text-decoration-none nav-link" href="#skills">
            Skills
          </a>
          <a className="mb-4 hover text-black text-decoration-none nav-link" href="#projetos">
            Projetos
          </a>
        <div>
        <div className="mt-10px">
          <button onClick={onClose} className="custom-button">
            Fechar
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
);
  }