export default function Footer() {
  return (
    <footer className="_footer w-full max-w-7xl mx-auto px-4 py-16 my-4 md:mt-10 rounded-lg text-sm text-gray-400 text-center">
      <div className="flex gap-4 justify-center mb-5">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61564425393999"
          className="p-1 bg-primary text-neutral rounded-full hover:bg-primary/80 transition-all duration-100"
        >
          <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/qaseeda/"
          className="p-1 bg-primary text-neutral rounded-full hover:bg-primary/80 transition-all duration-100"
        >
          <img src="/icons/linkedin.png" alt="Facebook" className="w-6 h-6" />
        </a>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()} by Qaseeda Band.</p>
      <p className="mt-0.5">
        Developed by{" "}
        <a
          className="underline"
          href="https://www.google.com/search?q=mohammad+sefatullah"
          target="_blank"
        >
          Sefatullah
        </a>
      </p>
    </footer>
  );
}
