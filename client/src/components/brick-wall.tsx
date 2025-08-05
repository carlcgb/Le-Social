import brickWallImage from "@assets/Brick_1754436192212.png";

export default function BrickWall() {
  return (
    <div 
      className="fixed inset-0 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat opacity-60"
      style={{
        backgroundImage: `url(${brickWallImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
    >
      {/* Additional dimming overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}