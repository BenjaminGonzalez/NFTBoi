function Footer() {
  return (
    <footer class="w-full flex flex-col sm:flex-row sm:justify-center text-lg tracking-wide px-4 sm:px-0 py-16">
      <div class="text-center pr-0 sm:pr-8 py-4">
        <ul class="list-none">
          <li>
            <a
              class="text-gray-800 hover:text-pink no-underline"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              class="text-gray-800 hover:text-pink no-underline"
              href="#features"
            >
              Team
            </a>
          </li>
        </ul>
      </div>
      <div class="h-px sm:h-auto w-1/2 sm:w-px bg-pink mx-auto sm:mx-0"></div>
      <div class="text-center px-8 py-4">
        <ul class="list-none">
          <li>
            <a
              class="text-gray-800 hover:text-pink no-underline"
              href="#about"
            >
              RoadMap
            </a>
          </li>
          <li>
            <a
              class="text-gray-800 hover:text-pink no-underline"
              href="#features"
            >
              Socials
            </a>
          </li>
        </ul>
      </div>
      <div class="h-px sm:h-auto w-1/2 sm:w-px bg-pink mx-auto sm:mx-0"></div>
      <div class="text-center pl-0 sm:pl-8 py-4">
        <ul class="list-none">
          <li>
            <a
              class="text-gray-800 hover:text-pink no-underline"
              href="/privacy"
            >
              NFT Explorer
            </a>
          </li>
          <li>
            <a
              class="text-gray-800 hover:text-pink no-underline"
              href="/imprint"
            >
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
