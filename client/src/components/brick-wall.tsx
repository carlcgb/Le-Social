import brickWallImage from "@assets/Brick_1754436192212.png";

export default function BrickWall() {
  return (
    <div 
      className="fixed inset-0 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat opacity-20"
      style={{
        backgroundImage: `url(${brickWallImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        filter: 'brightness(0.3) contrast(0.5)'
      }}
    >

    </div>
  );
}