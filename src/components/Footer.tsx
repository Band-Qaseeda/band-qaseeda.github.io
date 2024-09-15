
export default function Footer() {
  return (
    <footer className="_footer w-full max-w-7xl mx-auto px-4 py-16 my-4 md:mt-10 rounded-lg text-sm text-gray-400 text-center">
      <p>Copyright &copy; {new Date().getFullYear()} by Qaseeda Band.</p>
      <p className="mt-0.5">Site by <a className="underline" href="https://www.google.com/search?q=mohammad+sefatullah" target="_blank">Sefatullah</a></p>
    </footer>
  )
}
