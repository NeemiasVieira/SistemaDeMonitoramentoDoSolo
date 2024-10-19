import { useProcessImage } from '@services/FlaskAPI/useProcessImage';
import { SelecionarImagemRegistroStyle } from './SelecionarImagemStyle';
import { useEffect, useMemo, useState } from 'react';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';
import { useNotificacoes } from '@contexts/NotificacoesProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faImage } from '@fortawesome/free-solid-svg-icons';
import { fileNotValid } from './Contract';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSpecieByPlantId } from '@services/API/Species/useGetSpecieByPlantId';

const SelecionarImagemRegistro = () => {
  const [imageFile, setImageFile] = useState<File>();
  const { record, setImagem, setDiagnostico, setIdPlanta, setEspecie } = useMutateRecordContext();
  const { processImage, processedImage } = useProcessImage();
  const { notificar } = useNotificacoes();
  const { idPlanta } = useParams();
  const navigate = useNavigate();
  const { specie } = useGetSpecieByPlantId(idPlanta);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (fileNotValid(file, notificar)) return;
      setImageFile(file);
      processImage(file);
    }
  };

  useEffect(() => {
    setEspecie(specie);
  }, [specie]);

  useEffect(() => {
    if (processedImage) {
      setImagem(processedImage.imagem);
      setDiagnostico(processedImage.diagnostico);
    }
  }, [processedImage, setImagem, setDiagnostico, setIdPlanta]);

  const imageSource = useMemo(() => {
    return record?.imagem ? record.imagem : imageFile ? URL.createObjectURL(imageFile) : null;
  }, [imageFile, record?.imagem]);

  return (
    <SelecionarImagemRegistroStyle>
      <h1>Imagem do Registro</h1>
      <section>
        <div className="content">
          <div className="envio">
            <h2>Enviar sua imagem</h2>
            <p>
              Enviar uma imagem para o registro é opcional, essa imagem será processada pelo nosso modelo de
              Inteligência Artificial e irá dizer se sua planta está ou não saudável
            </p>
            <p>
              Os formatos aceitos para upload são: <b>.png e.jpeg</b>
            </p>
            <p>
              Tamanho máximo da imagem: <b>15 Mb</b>
            </p>
            {imageFile && (
              <p>
                Arquivo selecionado:
                <b> {imageFile.name}</b>
              </p>
            )}
            <label htmlFor="selectFile" className="inputFile">
              <FontAwesomeIcon icon={faImage} />
              Selecionar Imagem
            </label>
            <input type="file" id="selectFile" onChange={handleFileChange} maxLength={1} />
          </div>
          <div className="visualizacao">
            <h2>Pré-visualização</h2>
            {imageSource ? (
              <img src={imageSource} alt="Pré visualização da imagem" />
            ) : (
              <FontAwesomeIcon icon={faImage} className="placeHolderLogo" />
            )}
          </div>
        </div>

        <div className="actions">
          <button onClick={() => navigate(`/painel/plantas/${idPlanta}/registros`)}>
            <FontAwesomeIcon icon={faCircleLeft} />
            Cancelar
          </button>
          <button onClick={() => navigate(`/painel/plantas/${idPlanta}/registros/novo/dados`)}>Avançar</button>
        </div>
      </section>
    </SelecionarImagemRegistroStyle>
  );
};

export default SelecionarImagemRegistro;
