function Footer() {
  return (
    <footer class="w-full flex flex-col sm:flex-row sm:justify-center text-lg tracking-wide px-4 sm:px-0 py-16">
      <div class="text-center pr-0 sm:pr-8 py-4">
        <ul class="list-none">
          <li>
            <a
              class="text-gray-800 hover:text-pink-600 no-underline"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              class="text-gray-800 hover:text-pink-600 no-underline"
              href="#features"
            >
              Features
            </a>
          </li>
        </ul>
      </div>
      <div class="h-px sm:h-auto w-1/2 sm:w-px bg-pink-600 mx-auto sm:mx-0"></div>
      <div class="text-center px-8 py-4">
        <ul class="list-none">
          <li>
            <a
              class="text-gray-800 hover:text-pink-600 no-underline"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              class="text-gray-800 hover:text-pink-600 no-underline"
              href="#features"
            >
              Features
            </a>
          </li>
        </ul>
      </div>
      <div class="h-px sm:h-auto w-1/2 sm:w-px bg-pink-600 mx-auto sm:mx-0"></div>
      <div class="text-center pl-0 sm:pl-8 py-4">
        <ul class="list-none">
          <li>
            <a
              class="text-gray-800 hover:text-pink-600 no-underline"
              href="/privacy"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              class="text-gray-800 hover:text-pink-600 no-underline"
              href="/imprint"
            >
              Imprint
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
