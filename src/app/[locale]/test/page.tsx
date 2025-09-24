export default function TestPage() {
  return (
    <div className="bg-background text-foreground min-h-screen p-8">
      <h1 className="text-primary mb-4 text-4xl font-bold">Test Page - Custom Colors</h1>
      <div className="bg-card border-border mb-4 rounded-lg border p-4">
        <h2 className="text-card-foreground mb-2 font-semibold">Card Test</h2>
        <p className="text-muted-foreground">
          Si ves este texto con los colores personalizados, la configuración funciona.
        </p>
      </div>
      <div className="bg-primary text-primary-foreground mb-4 rounded-lg p-4">
        Fondo primary con texto primary-foreground
      </div>
      <div className="bg-secondary text-secondary-foreground mb-4 rounded-lg p-4">
        Fondo secondary con texto secondary-foreground
      </div>
      <button className="bg-accent text-accent-foreground rounded px-4 py-2 font-bold transition-opacity hover:opacity-90">
        Botón accent
      </button>
    </div>
  );
}
