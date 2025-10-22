import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
      <div className="text-2xl font-bold">YOGITHA PRASAD</div>
      <nav className="space-x-4">
        <Link href="#about" className="hover:text-cyan-400">About</Link>
        <Link href="#projects" className="hover:text-cyan-400">Projects</Link>
        <Link href="#contact" className="hover:text-cyan-400">Contact</Link>
                <a href="https://github.com/yogithaprasad" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">GitHub</a>
        <a href="https://www.linkedin.com/in/yogitha-prasad-2a96b9263/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">LinkedIn</a>
        <a href="https://leetcode.com/u/yogithaprasad/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">LeetCode</a>

      </nav>
    </header>
  );
}