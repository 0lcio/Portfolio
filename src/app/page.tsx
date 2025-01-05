export default function Home() {

  const birthDate = new Date(process.env.BIRTH_DATE || '1999-01-01');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return (
    <div className="text-end w-52 font-light text-sm md:text-base transition">
      <p className="bg-[#0a0a0a]/85">{age} y/o born in Pavia, Italy.</p>
      <p>&nbsp;</p>
      <p className="bg-[#0a0a0a]/85">Driven by an overwhelming curiosity, i am constantly pursuing new challenges related to the tech industry.</p>
      <p>&nbsp;</p>
      <p className="bg-[#0a0a0a]/85">Currently in the 3rd year of B.S. degree in Computer Science at the University of Milan-Bicocca.</p>
    </div>
  );
}
