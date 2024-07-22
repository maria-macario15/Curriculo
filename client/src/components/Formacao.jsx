import senai from '../senai.png'
import faesa from '../Faesa.png'
function Formacao() {
    return (
        
           <main className='row'>
<div className='col'>
  <div class="error">
 <img src={senai} alt="SENAI" class="error__icon"/>
  <div class="error__title">SENAI - Centro de Educação e Tecnologia Arivaldo Silveira Fontes</div>
  </div>
          <p className='fs-4 texts'>  
            Técnico: Desenvolvimento de Sistemas <p className='fs-4 fst-italic'>(Concluido)</p>
      
            2023 - 2024
 </p>
            <div class="error">
 <img src={faesa} alt="Faesa" class="error__icon"/>
  <div class="error__title"> Fundação de Assistência e Educação Faesa</div>
  </div>
           <p className='fs-4 texts'>
            
            Superior: Análise e Desenvolvimento de Sistemas <p className='fs-4 fst-italic'>(Em andamento)</p>
            2024 - 2027
</p>
        </div>
    </main>

)}

export default Formacao