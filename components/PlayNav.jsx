import Link from 'next/link';

export default function PlayNav() {
  return (
    <div>
      <h2>Play the Game</h2>
      <ul className="list-disc">
        <li>
          <Link href="/play/introduction">Intro</Link>
        </li>
        <li>
          <Link href="/play/rules">Rules</Link>
        </li>
        <li>
          <Link href="/play/players">Players</Link>
        </li>
        <li>
          <Link href="/play/attack">Attack</Link>
        </li>
        <li>
          <Link href="/play/defence">Defence</Link>
        </li>
        <li>
          <Link href="/play/skills">Skills</Link>
        </li>
      </ul>
    </div>
  );
}
