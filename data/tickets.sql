-- Insertar tickets de ejemplo (usando los IDs generados automáticamente para los clientes)
INSERT INTO "Ticket" ("customer_id", "title", "description", "completed", "tech")
VALUES
  (1, 'Reparación de pantalla', 'Pantalla rota en smartphone', false, 'Carlos'),
  (2, 'Cambio de batería', 'Batería agotada en laptop', false, 'unassigned'),
  (3, 'Actualización de software', 'Actualizar sistema operativo', true, 'María'),
  (4, 'Instalación de antivirus', 'Instalar antivirus en PC', false, 'Pedro'),
  (5, 'Limpieza interna', 'Limpieza de componentes de laptop', true, 'Sofía'),
  (6, 'Reemplazo de teclado', 'Teclado dañado en notebook', false, 'Carlos'),
  (7, 'Recuperación de datos', 'Recuperar archivos borrados', false, 'Lucía'),
  (8, 'Configuración de red', 'Configurar WiFi en oficina', true, 'Miguel'),
  (9, 'Cambio de disco duro', 'Disco duro defectuoso', false, 'Elena'),
  (10, 'Reparación de puerto USB', 'Puerto USB no funciona', false, 'María');
