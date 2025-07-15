import { useXR } from "@react-three/xr";

export default function EnterARButton() {
  const { player, isPresenting } = useXR();

  if (isPresenting) return null;

  return (
    <button
      style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 24px",
        border: "1px solid white",
        borderRadius: "8px",
        background: "rgba(0, 0, 0, 0.5)",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
      onClick={() => player.enterAR()}
    >
      Enter Room in AR
    </button>
  );
}
