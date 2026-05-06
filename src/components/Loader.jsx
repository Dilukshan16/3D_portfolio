import { Html, useProgress } from "@react-three/drei"


const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-normal text-xl text-center">
      <div>{progress}% loaded </div>
    </Html>
  )
}

export default Loader
