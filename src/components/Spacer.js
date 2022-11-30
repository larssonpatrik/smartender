const SPACING = [8, 16, 24, 32, 48, 64];

export default function Spacer({ size }) {
  return <div style={{ width: SPACING[size], height: SPACING[size] }}></div>;
}
