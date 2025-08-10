import brickWallImage from "@assets/Brick_1754436192212.png";

export default function BrickWall() {
  return (
    <div 
      className="fixed inset-0 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat opacity-40"
      style={{
        backgroundImage: `url(${brickWallImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
    >

    </div>
  );
}