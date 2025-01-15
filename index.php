<?php
  session_start();
  if ((!isset($_SESSION["login"]) == true) and (!isset($_SESSION["currentPassword"]) == true)) {
    unset($_SESSION["login"]);
    unset($_SESSION["currentPassword"]);
    header("Location: register.html");
  }
  $logado = $_SESSION["login"]
?>
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="images/icons/" type="image/x-icon" />
    <!-- ÍCONES FONT AWESOME -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    />
    <!-- FONTES GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
      rel="stylesheet"
    />
    <!-- CÓDIGOS CSS PADRÃO -->
    <link rel="stylesheet" href="assets/css/pages/index/index.css" />
    <!-- CÓDIGOS JS PADRÃO -->
    <script src="assets/js/pages/index/submitPost.js" defer></script>
    <script src="assets/js/pages/index/showImage.js" defer></script>
    <script src="assets/js/pages/index/showMenu.js" defer></script>
    <title>Página inicial</title>
  </head>
  <body class="homePage">
    <header class="header">
      <!-- Parte à esquerda com o logo e menu mobile -->
      <div class="header__left">
        <a href="index.php"
          ><img
            src="assets/images/logoCEFET.webp"
            alt="logo do CEFET"
            class="header__logo"
        /></a>
      </div>

      <!-- Parte ao meio com a barra de navegação -->
      <nav class="header__navigation" id="navigationHeader">
        <ul class="navigation__list--header">
          <li>
            <a href="index.php" class="navigation__link--header">INÍCIO</a>
          </li>
          <li><a href="#" class="navigation__link--header">DESTAQUES</a></li>
          <li>
            <a href="register.html" class="navigation__link--header">PERFIL</a>
          </li>
        </ul>
      </nav>

      <!-- Parte à direita com barra de busca e redes sociais -->
      <div class="header__right">
        <!-- Barra de pesquisa -->
        <div class="header__search">
          <form action="">
            <button type="submit" class="search__button">
              <i class="fas fa-search text-pure-0" id="search__icon"></i>
            </button>
            <input
              type="search"
              name="pesquisar"
              id="searchBox"
              placeholder="Busque no portal"
              class="search__input"
            />
          </form>
        </div>

        <!-- Ícones de redes sociais -->
        <div class="header__social">
          <a href="https://www.facebook.com/cefetrjoficial" target="_blank">
            <i
              class="fa-brands fa-facebook social__link"
              id="social__linkFacebook"
            ></i>
          </a>
          <a href="https://www.instagram.com/cefet_rj/" target="_blank">
            <i
              class="fa-brands fa-instagram social__link"
              id="social__linkInstagram"
            ></i>
          </a>
          <a href="https://twitter.com/cefet_rj" target="_blank">
            <i
              class="fa-brands fa-x-twitter social__link"
              id="social__linkXTwitter"
            ></i>
          </a>
          <a href="https://www.youtube.com/cefetrjoficial" target="_blank">
            <i
              class="fa-brands fa-youtube social__link"
              id="social__linkYoutube"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/school/cefetrjoficial/"
            target="_blank"
          >
            <i
              class="fa-brands fa-linkedin social__link"
              id="social__linkLinkedin"
            ></i>
          </a>
        </div>
      </div>
    </header>
    <main class="main">
      <aside class="aside--left">
        <nav class="aside__navigation">
          <ul class="navigation__list--aside">
            <li class="navigation__itemList--aside">
              <a href="#" class="navigation__link--aside">SALVOS</a>
            </li>
            <li class="navigation__itemList--aside">
              <a href="#" class="navigation__link--aside">CURTIDOS</a>
            </li>
            <li class="navigation__itemList--aside">
              <a href="https://cefet-rj.br/" target="_blank" class="navigation__link--aside">PÁGINA DO CEFET</a>
            </li>
            <li class="navigation__itemList--aside">
              <a href="php/auth/exit.php" class="navigation__link--aside aside--profile">SAIR</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div id="verticalLine--left"></div>
      <section class="section"></section>
      <div id="verticalLine--right"></div>
      <aside class="aside--right">
        <h3 class="aside__title">POSTE AQUI!</h3>
        <div class="aside__post">
          <!-- Bloco do formulário para postagem -->
          <form
            class="aside__form"
            method="post"
            enctype="multipart/form-data"
            action="php/contents/post.php"
            target="post"
            id="postForm"
          >
            <!-- Grupo para o conteúdo do post -->
            <div class="form__group form__group--textarea">
              <label
                for="postContent"
                class="form__label form__label--textarea"
              >
                Conteúdo do Post
              </label>
              <textarea
                name="post"
                id="postContent"
                oninput="validatePost()"
                class="form__input form__textarea"
                placeholder="Escreva aqui seu post!"
              ></textarea>
            </div>

            <!-- Grupo para upload de imagens -->
            <div class="form__group form__group--file">
              <!-- Subgrupo para o input e botão de fechar -->
              <div class="form__subgroup form__subgroup--input">
                <label for="inputFile" class="form__label form__label--file">
                  Insira uma foto ;)
                </label>
                <button
                  type="button"
                  class="form__button form__button--close"
                  onclick="removeImage()"
                  aria-label="Remover imagem"
                >
                  <i
                    class="fa-solid fa-xmark fa-lg form__icon form__icon--close"
                  ></i>
                </button>
                <input
                  type="file"
                  name="image"
                  id="inputFile"
                  class="form__input form__input--file"
                  accept="image/png, image/jpeg"
                />
              </div>

              <!-- Subgrupo para exibir a imagem selecionada -->
              <div
                class="form__subgroup form__subgroup--preview"
                id="previewContainer"
                aria-hidden="true"
              >
                <img
                  src=""
                  alt="Sua foto"
                  class="form__image"
                  id="previewImage"
                />
              </div>
            </div>

            <!-- Botão para envio do formulário -->
            <button
              type="submit"
              value="submit"
              id="postButton"
              class="form__button form__button--submit"
            >
              POSTAR 
            </button>
          </form>
        </div>
      </aside>
    </main>
    <div id="overlay" onclick="closeSidebar()" aria-hidden="true"></div>
    <iframe class="iframe--hidden" name="post" aria-hidden="true"></iframe>
  </body>
</html>
