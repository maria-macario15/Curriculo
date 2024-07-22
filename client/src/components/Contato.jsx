import "bootstrap-icons/font/bootstrap-icons.css";

function Contato() {
    return (

<ul class="example-2">
  <li class="icon-content">
    <a aria-label="E-mail" data-social="E-mail" >
      <div class="filled"></div>
      <i class="bi bi-envelope-at-fill"/>
    </a>
    <div class="tooltip">maria.15macario@gmail.com</div>
 
  </li>

  <li class="icon-content">
    <a aria-label="Tel" data-social="Tel" >
      <div class="filled"></div>
      <i class="bi bi-telephone-fill"/>
    </a>
    <div class="tooltip"> +55 27 9 9853-5094 </div>
 
  </li>  

  <li class="icon-content">
    <a aria-label="End" data-social="End" >
      <div class="filled"></div>
      <i class="bi bi-house-fill"/>
    </a>
    <div class="tooltip"> Serra-ES </div>
 
  </li> 
</ul>



/*
        <div>
            <i class="bi bi-telephone-fill"> +55 27 9 9853-5094 </i><br />
            <i class="bi bi-envelope-at-fill"> maria.15macario@gmail.com</i><br />
           
        </div>


*/
    )
}

export default Contato