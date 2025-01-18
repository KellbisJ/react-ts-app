const random = (): number => {
  return Math.floor(Math.random() * 123 + 1)
}

export const RandomFox: React.FC = () => {
  const image = `https://randomfox.ca/images/${random()}.jpg`
  return (
  <img src={image} className="w-[320px] h-auto rounded"/>
)  
}