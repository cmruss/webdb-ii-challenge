
exports.seed = function(knex) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          id: 1, 
          vin: 'WVWEV71K46W107638',
          make: 'Volkswagen',
          model: 'GTI',
          mileage: 150000,
          year: 2006,
          automatic: false,
          title: 'Rebuilt'
        },
        {
          id: 2, 
          vin: '1FX6PSTMXQ5200001',
          make: 'Ford',
          model: 'Mustang',
          mileage: 125000,
          year: 1999,
          automatic: true,
          title: 'Clear'
        },
        {
          id: 3, 
          vin: '1J4FF48S9YL123456',
          make: 'Jeep',
          model: 'Cherokee',
          mileage: 110000,
          year: 2000,
          automatic: true,
          title: 'Clear'
        },
        {
          id: 4, 
          vin: '5NHX4449DH123456',
          make: 'Hyundai',
          model: 'Elantra',
          mileage: 98000,
          year: 2002,
          automatic: true,
          title: 'Clear'
        }
      ]);
    });
};
