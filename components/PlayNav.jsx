import Link from 'next/link';

export default function PlayNav() {
  return (
    <div>
      <h2>Play the Game</h2>
      <ul className="list-disc text-green-700 hover:text-green-800">
        <li>
          <Link href="/play/introduction">
            <span className="list-disc text-green-700 hover:text-green-800">Intro</span>
          </Link>
        </li>
        <li>
          <Link href="/play/rules">
            <span className="list-disc text-green-700 hover:text-green-800">Rules</span>
          </Link>
        </li>
        <li>
          <Link href="/play/players">
            <span className="list-disc text-green-700 hover:text-green-800">Players</span>
          </Link>
        </li>
        <li>
          <Link href="/play/attack">
            <span className="list-disc text-green-700 hover:text-green-800">Attack</span>
          </Link>
        </li>
        <li>
          <Link href="/play/defence">
            <span className="list-disc text-green-700 hover:text-green-800">Defence</span>
          </Link>
        </li>
        <li>
          <Link href="/play/skills">
            <span className="list-disc text-green-700 hover:text-green-800">Skills</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
