Gestión de productos e inventario.

Puesta en marcha

-Backend: desde backend, instalar requirements.txty ejecutar python app.py.
-Frontend: desde frontend, ejecutar npm instally npm run dev.
-El frontend se conecta al backend Flask en http://localhost:5000.
Al iniciar, el backend crea las tablas de movimientos y lotes que faltan y agrega a productoslos campos necesarios para stock, tipo de venta, proveedor y códigos internos. Si la base ya tenía productos sin código, se les asigna un código INT-automáticamente. Los productos con movimientos o lotes se archivan al eliminarlos para conservar su historial.

Operaciones disponibles
-Productos: alta y edición de nombre, marca, categoría, proveedor, código de barras, tipo de venta (unidad o peso), stock, costo, precio y umbrales mínimo/crítico. Si el código se deja vacío, se asigna uno interno único.
-Inventario: búsqueda por nombre o código, filtros por stock agotado, bajo/crítico y muchos próximos a vencer. El resumen presenta valoración al costo y al precio de venta.
-Precios: actualización masiva por porcentaje o monto, limitada opcionalmente por categoría y proveedor. Un valor negativo aplica un descuento.
-Lotes y vencimientos: registrador cantidad, identificación opcional y fecha de vencimiento de cada lote. El ingreso suma esa cantidad al stock; la pantalla identifica vencidos y los próximos a vencer en 30 días.
-Movimientos: registrador mermas, roturas, consumo propio, bajas por vencimiento y devoluciones, siempre con cantidad y justificación. Las bajas reducen stock; las devoluciones lo reincorporan. Los ajustes manuales y el stock inicial también quedan en el historial.

API de inventario
-GET/POST /api/productos,GET/PUT/DELETE /api/productos/<id>
-PATCH /api/productos/<id>/stock
-GET /api/inventario/resumen, GET /api/categorias,GET /api/proveedores
-POST /api/precios/actualizacion-masiva
-GET/POST /api/lotes
-GET/POST /api/movimientos

Las cantidades son decimales para permitir productos fraccionados y vendidos por peso.
