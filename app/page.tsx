import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <p className="mb-4">
        I remember my first encounter with web development during my senior year internship. The world of Javascript and web frameworks enthralled me with the possibilities of creating endlessly and having the world see my work over the internet. This was enough for me to switch my electrical engineering track career to software engineering. Safe to say I have never looked back.
      </p>


      <p className="mb-4">
        I completed my Masters focused on software engineering and joined my first real job at a
        <Link
          href='https://prodigiq.com/'
          target="_blank"
          className="text-yellow-300 hover:text-yellow-600"
        >
          <span> small but powerful startup </span>
        </Link>
        as a full-stack engineer and was able to grow and polish my skills in real-world scenarios by shipping clean and organized code to prtoduction and meeting client expectations.
      </p>

      <p className="mb-4">
      These days, I am working on new personal projects mainly using Django, NextJS and Tailwind CSS. When I am not coding, I am usually hiking or exploring Los Angeles on a quest to find the best breakfast burrito in the city.
      </p>
    </div>
  );
}
