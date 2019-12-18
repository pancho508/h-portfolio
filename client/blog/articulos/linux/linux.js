<nav id="sidebar" >
  <div className="sidebar-header">
    <h3>Linux</h3>
  </div>
  <ul className="list-unstyled components">
    <p>introduccion al curso</p>
    <li>
      <a href="#Seccion0" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">0. Intro a Linux</a>
      <ul className="collapse list-unstyled" id="Seccion0">
        <li>
          <Link to="/historiaLinux" id="sec">La historia de linux</Link>
        </li>
        <li>
          <Link to="/historiaLinux" id="sec">Distribuciones de Linux</Link>
        </li>
        <li>
          <Link to="/historiaLinux" id="sec">Instala linux a la computadora</Link>
        </li>
        <li>
          <Link to="/historiaLinux" id="sec">Ubuntu lo primero que devemos hacer</Link>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">1. La Linea de comando</a>
      <ul className="collapse list-unstyled" id="Seccion1">
        <li>
          <a href="#">La Estrotura de el Directorio Linux</a>
        </li>
        <li>
          <a href="#">El Shell de linux</a>
        </li>
        <li>
          <a href="#">Comandos para la terminal</a>
        </li>
        <li>
          <a href="#">Trabajemos con el directorio</a>
        </li>
        <li>
          <a href="#">Trabajemos con el directorio</a>
        </li>
        <li>
          <a href="#">Hay que Jugar</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion2" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">2. Permisos y Emacs</a>
      <ul className="collapse list-unstyled" id="Seccion2">
        <li>
          <a href="#">archivos y permisos explicados</a>
        </li>
        <li>
          <a href="#">Editor de textos</a>
        </li>
        <li>
          <a href="#">Nano, VIM, Emacs</a>
        </li>
        <li>
          <a href="#">Buscando Archivos en linux</a>
        </li>
        <li>
          <a href="#">Editores Graficos</a>
        </li>
        <li>
          <a href="#">Deleting, Copying, Moving, and Renaming Files </a>
        </li>
        <li>
          <a href="#">Entrada, salida y redireccionamiento</a>
        </li>
        <li>
          <a href="#">Comparación de archivos</a>
        </li>
        <li>
          <a href="#">Buscar en archivos y usar tuberías</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion3" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">3. Redes</a>
      <ul className="collapse list-unstyled" id="Seccion3">
        <li>
          <a href="#">Que son las Redes?</a>
        </li>
        <li>
          <a href="#">Configuraciones de red</a>
        </li>
        <li>
          <a href="#">Vamos a hackear wifi</a>
        </li>
        <li>
          <a href="#">wireShark sniff</a>
        </li>
        <li>
          <a href="#">Transferencia y copia de archivos a través de la red</a>
        </li>
        <li>
          <a href="#">Personalización de shell</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion4" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">4. Shell Scripting</a>
      <ul className="collapse list-unstyled" id="Seccion4">
        <li>
          <a href="#">Variables de entorno</a>
        </li>
        <li>
          <a href="#">Procesos y Control de Trabajo</a>
        </li>
        <li>
          <a href="#">Programación de trabajos repetidos con Cron</a>
        </li>
        <li>
          <a href="#">Cambio de usuarios y ejecución de comandos como otros</a>
        </li>
        <li>
          <a href="#">Historial de shell y finalización de pestañas</a>
        </li>
        <li>
          <a href="#">Instalando Software</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion5" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">5. Configuracion MERN</a>
      <ul className="collapse list-unstyled" id="Seccion5">
        <li>
          <a href="#">Instalación de MongoDB</a>
        </li>
        <li>
          <a href="#">Instalación de NodeJS</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion6" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">6. Hay que divertirnos</a>
      <ul className="collapse list-unstyled" id="Seccion6">
        <li>
          <a href="#">Juegos</a>
        </li>
        <li>
          <a href="#">Torrents P2P</a>
        </li>
        <li>
          <a href="#">Personalizar</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#Seccion7" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">7. El Kernel</a>
      <ul className="collapse list-unstyled" id="Seccion7">
        <li>
          <a href="#">Las Entranas</a>
        </li>
        <li>
          <a href="#">Cuando corres un progragma</a>
        </li>
        <li>
          <a href="#">El Hardware</a>
        </li>
      </ul>
    </li>

    <li>
      <a href="#">Examen Final</a>
    </li>

  </ul>
  <ul className="list-unstyled CTAs">
    <li>
      <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Descargar Curso</a>
    </li>
    <li>
      <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
    </li>
  </ul>
</nav>

{/* Page Content  */}
<div id="content">
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <button type="button" id="sidebarCollapse" className="btn btn-info">
        <i className="fas fa-align-left" />
        <span>Barra lateral</span>
      </button>
      <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-align-justify" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                    s0
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s1" data-toggle="dropdown">
                    s1
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s2" data-toggle="dropdown">
                    s2
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s3" data-toggle="dropdown">
                    s3
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s4" data-toggle="dropdown">
                    s4
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s5" data-toggle="dropdown">
                    s5
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s6" data-toggle="dropdown">
                    s6
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="s7" data-toggle="dropdown">
                    s7
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  <h2>Collapsible Sidebar Using Bootstrap 4</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div className="line" />
  <h2>Lorem Ipsum Dolor</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div className="line" />
  <h2>Lorem Ipsum Dolor</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div className="line" />
  <h3>Lorem Ipsum Dolor</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>