import React from "react";

const Card = () => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-4 ">
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white ">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://mediaim.expedia.com/destination/1/15c19af6d32f4bdb8f5f454dedd0554e.jpg"
            alt="Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-black">
            Rosario
          </h5>
          <p className="mb-4 text-base text-black">
            Constituye uno de los principales centros urbanos de la República
            Argentina. Posee un importante puerto sobre la margen occidental del
            río Paraná, hallándose a 305 km al noroeste de Buenos Aires, la
            capital argentina. Junto a otras localidades conforma el área
            metropolitana del Gran Rosario que, con 1.161.188 hab.
          </p>
        </div>
        <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
          <small>Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
