const MUNICIPALITIES = [
  { code: '001', municipality: 'Managua', department: 'Managua' },
  { code: '002', municipality: 'San Rafael Del Sur', department: 'Managua' },
  { code: '003', municipality: 'Tipitapa', department: 'Managua' },
  { code: '004', municipality: 'Villa Carlos Fonseca', department: 'Managua' },
  { code: '005', municipality: 'San Francisco Libre', department: 'Managua' },
  { code: '006', municipality: 'Mateare', department: 'Managua' },
  { code: '007', municipality: 'Ticuantepe', department: 'Managua' },
  { code: '008', municipality: 'Ciudad Sandino', department: 'Managua' },
  { code: '009', municipality: 'El Crucero', department: 'Managua' },
  { code: '041', municipality: 'Jinotepe', department: 'Carazo' },
  { code: '042', municipality: 'Diriamba', department: 'Carazo' },
  { code: '043', municipality: 'San Marcos', department: 'Carazo' },
  { code: '044', municipality: 'Santa Teresa', department: 'Carazo' },
  { code: '045', municipality: 'Dolores', department: 'Carazo' },
  { code: '046', municipality: 'La Paz Carazo', department: 'Carazo' },
  { code: '047', municipality: 'El Rosario', department: 'Carazo' },
  { code: '048', municipality: 'La Conquista', department: 'Carazo' },
  { code: '081', municipality: 'Chinandega', department: 'Chinandega' },
  { code: '082', municipality: 'Corinto', department: 'Chinandega' },
  { code: '083', municipality: 'El Realejo', department: 'Chinandega' },
  { code: '084', municipality: 'Chichigalpa', department: 'Chinandega' },
  { code: '085', municipality: 'Posoltega', department: 'Chinandega' },
  { code: '086', municipality: 'El Viejo', department: 'Chinandega' },
  { code: '087', municipality: 'Puerto Morazán', department: 'Chinandega' },
  { code: '088', municipality: 'Somotillo', department: 'Chinandega' },
  { code: '089', municipality: 'Villa Nueva', department: 'Chinandega' },
  {
    code: '090',
    municipality: 'Santo Tomás del Norte',
    department: 'Chinandega'
  },
  { code: '091', municipality: 'Cinco Pinos', department: 'Chinandega' },
  {
    code: '092',
    municipality: 'San Francisco Del Norte',
    department: 'Chinandega'
  },
  {
    code: '093',
    municipality: 'San Pedro Del Norte',
    department: 'Chinandega'
  },
  { code: '121', municipality: 'Juigalpa', department: 'Chontales' },
  { code: '122', municipality: 'Acoyapa', department: 'Chontales' },
  { code: '123', municipality: 'Santo Tomás', department: 'Chontales' },
  { code: '124', municipality: 'Villa Sandino', department: 'Chontales' },
  { code: '125', municipality: 'San Pedro de Lóvago', department: 'Chontales' },
  { code: '126', municipality: 'La Libertad', department: 'Chontales' },
  { code: '127', municipality: 'Santo Domingo', department: 'Chontales' },
  { code: '128', municipality: 'Comalapa', department: 'Chontales' },
  { code: '129', municipality: 'San Francisco Cuapa', department: 'Chontales' },
  { code: '130', municipality: 'El Coral', department: 'Chontales' },
  { code: '161', municipality: 'Estelí', department: 'Estelí' },
  { code: '162', municipality: 'Pueblo Nuevo', department: 'Estelí' },
  { code: '163', municipality: 'Condega', department: 'Estelí' },
  { code: '164', municipality: 'San Juan Limay', department: 'Estelí' },
  { code: '165', municipality: 'La Trinidad', department: 'Estelí' },
  { code: '166', municipality: 'San Nicolás', department: 'Estelí' },
  { code: '201', municipality: 'Granada', department: 'Granada' },
  { code: '202', municipality: 'Nandaime', department: 'Granada' },
  { code: '203', municipality: 'Diriomo', department: 'Granada' },
  { code: '204', municipality: 'Diriá', department: 'Granada' },
  { code: '241', municipality: 'Jinotega', department: 'Jinotega' },
  { code: '242', municipality: 'San Rafael Del Norte', department: 'Jinotega' },
  { code: '243', municipality: 'San Sebastián Yalí', department: 'Jinotega' },
  { code: '244', municipality: 'La Concordia', department: 'Jinotega' },
  { code: '245', municipality: 'San José De Bocay', department: 'Jinotega' },
  { code: '246', municipality: 'El Cuá Bocay', department: 'Jinotega' },
  { code: '247', municipality: 'Santa María Pantasma', department: 'Jinotega' },
  { code: '281', municipality: 'Leon', department: 'León' },
  { code: '283', municipality: 'El Jicaral', department: 'León' },
  { code: '284', municipality: 'La Paz Centro', department: 'León' },
  { code: '285', municipality: 'Santa Rosa Del Peñón', department: 'León' },
  { code: '286', municipality: 'Quetzalguaque', department: 'León' },
  { code: '287', municipality: 'Nagarote', department: 'León' },
  { code: '288', municipality: 'El Sauce', department: 'León' },
  { code: '289', municipality: 'Achuapa', department: 'León' },
  { code: '290', municipality: 'Telica', department: 'León' },
  { code: '291', municipality: 'Larreynaga Malpaisillo', department: 'León' },
  { code: '321', municipality: 'Somoto', department: 'Madriz' },
  { code: '322', municipality: 'Telpaneca', department: 'Madriz' },
  { code: '323', municipality: 'Sn Juan Rio Coco', department: 'Madriz' },
  { code: '324', municipality: 'Palacagüina', department: 'Madriz' },
  { code: '325', municipality: 'Yalagüina', department: 'Madriz' },
  { code: '326', municipality: 'Totogalpa', department: 'Madriz' },
  { code: '327', municipality: 'San Lucas', department: 'Madriz' },
  { code: '328', municipality: 'La Sabanas', department: 'Madriz' },
  { code: '329', municipality: 'San José De Cusmapa', department: 'Madriz' },
  { code: '361', municipality: 'Boaco', department: 'Boaco' },
  { code: '362', municipality: 'Camoapa', department: 'Boaco' },
  { code: '363', municipality: 'Santa Lucía', department: 'Boaco' },
  { code: '364', municipality: 'San José Del Remate', department: 'Boaco' },
  { code: '365', municipality: 'San Lorenzo', department: 'Boaco' },
  { code: '366', municipality: 'Teustepe', department: 'Boaco' },
  { code: '401', municipality: 'Masaya', department: 'Masaya' },
  { code: '402', municipality: 'Nindirí', department: 'Masaya' },
  { code: '403', municipality: 'Tisma', department: 'Masaya' },
  { code: '404', municipality: 'Catarina', department: 'Masaya' },
  { code: '405', municipality: 'San Juan Oriente', department: 'Masaya' },
  { code: '406', municipality: 'Niquinohomo', department: 'Masaya' },
  { code: '407', municipality: 'Nandasmo', department: 'Masaya' },
  { code: '408', municipality: 'Masatepe', department: 'Masaya' },
  { code: '409', municipality: 'La Concepción', department: 'Masaya' },
  { code: '441', municipality: 'Matagalpa', department: 'Matagalpa' },
  { code: '442', municipality: 'San Ramón', department: 'Matagalpa' },
  { code: '443', municipality: 'Matiguás', department: 'Matagalpa' },
  { code: '444', municipality: 'Muy Muy', department: 'Matagalpa' },
  { code: '445', municipality: 'Esquipulas', department: 'Matagalpa' },
  { code: '446', municipality: 'San Dionisio', department: 'Matagalpa' },
  { code: '447', municipality: 'San Isidro', department: 'Matagalpa' },
  { code: '448', municipality: 'Sébaco', department: 'Matagalpa' },
  { code: '449', municipality: 'Ciudad Darío', department: 'Matagalpa' },
  { code: '450', municipality: 'Terrabona', department: 'Matagalpa' },
  { code: '451', municipality: 'Rio Blanco', department: 'Matagalpa' },
  { code: '452', municipality: 'Tuma La Dalia', department: 'Matagalpa' },
  { code: '453', municipality: 'Rancho Grande', department: 'Matagalpa' },
  {
    code: '454',
    municipality: 'Waslala',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  { code: '481', municipality: 'Ocotal', department: 'Nueva Segovia' },
  { code: '482', municipality: 'Santa María', department: 'Nueva Segovia' },
  { code: '483', municipality: 'Macuelizo', department: 'Nueva Segovia' },
  { code: '484', municipality: 'Dipilto', department: 'Nueva Segovia' },
  { code: '485', municipality: 'Ciudad Antigua', department: 'Nueva Segovia' },
  { code: '486', municipality: 'Mozonte', department: 'Nueva Segovia' },
  { code: '487', municipality: 'San Fernando', department: 'Nueva Segovia' },
  { code: '488', municipality: 'El Jícaro', department: 'Nueva Segovia' },
  { code: '489', municipality: 'Jalapa', department: 'Nueva Segovia' },
  { code: '490', municipality: 'Murra', department: 'Nueva Segovia' },
  { code: '491', municipality: 'Quilalí', department: 'Nueva Segovia' },
  { code: '492', municipality: 'Wiwilí', department: 'Nueva Segovia' },
  {
    code: '493',
    municipality: 'Wiwilí Nueva Segovia',
    department: 'Nueva Segovia'
  },
  { code: '521', municipality: 'San Carlos', department: 'Río San Juan' },
  { code: '522', municipality: 'El Castillo', department: 'Río San Juan' },
  { code: '523', municipality: 'San Miguelito', department: 'Río San Juan' },
  { code: '524', municipality: 'Morrito', department: 'Río San Juan' },
  {
    code: '525',
    municipality: 'San Juan del Norte',
    department: 'Río San Juan'
  },
  { code: '526', municipality: 'El Almendro', department: 'Río San Juan' },
  { code: '561', municipality: 'Rivas', department: 'Rivas' },
  { code: '562', municipality: 'San Jorge', department: 'Rivas' },
  { code: '563', municipality: 'Buenos Aires', department: 'Rivas' },
  { code: '564', municipality: 'Potosí', department: 'Rivas' },
  { code: '565', municipality: 'Belén', department: 'Rivas' },
  { code: '566', municipality: 'Tola', department: 'Rivas' },
  { code: '567', municipality: 'San Juan Sur', department: 'Rivas' },
  { code: '568', municipality: 'Cárdenas', department: 'Rivas' },
  { code: '569', municipality: 'Moyogalpa', department: 'Rivas' },
  { code: '570', municipality: 'Altagracia', department: 'Rivas' },
  {
    code: '601',
    municipality: 'Bluefields',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '602',
    municipality: 'Corn Island',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '603',
    municipality: 'El Rama',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '604',
    municipality: 'Muelle De Los Buelles',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '605',
    municipality: 'La Cruz De Rio Grande',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '606',
    municipality: 'Prinzapolka',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '607',
    municipality: 'Puerto Cabezas',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '608',
    municipality: 'Waspán',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '610',
    municipality: 'Siuna',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '611',
    municipality: 'Bonanza',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '612',
    municipality: 'Rosita',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '615',
    municipality: 'Bocana Paiwás',
    department: 'Región Autónoma de la Costa Caribe Norte (RACCN)'
  },
  {
    code: '616',
    municipality: 'Nueva Guinea',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '619',
    municipality: 'Tortuguero',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '624',
    municipality: 'Kukra Hill',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '626',
    municipality: 'Laguna De Perlas',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '627',
    municipality: 'Desembocadura Rio Grande',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  },
  {
    code: '628',
    municipality: 'El Ayote',
    department: 'Región Autónoma de la Costa Caribe Sur (RACCS)'
  }
]

export default MUNICIPALITIES
