const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/nextjs-tailwind-portfolio-template/"
    : "";
};

export { getImagePrefix };
 