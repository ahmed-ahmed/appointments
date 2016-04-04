angular.module('app').controller('appointmentsController', ['$log', function($log) {


  this.appointments = [
  {
    fromDate: new Date('2016 01 01'), toDate: new Date('2016 01 15'),
    fromTime: new Date(), toTime: new Date(),
    Duration: '00:30:00', participants: 5, status: 'in progress',
  },
  {
    fromDate: new Date('2016 01 25'), toDate: new Date('2016 02 15'),
    fromTime: new Date(), toTime: new Date(),
    Duration: '00:30:00', participants: 5, status: 'in progress'
  },
  {
    fromDate: new Date('2015 02 01'), toDate: new Date('2015 02 01'),
    fromTime: new Date(), toTime: new Date(),
    Duration: '00:30:00', participants: 5, status: 'in progress'
  },
  {
    fromDate: new Date('2015 02 01'), toDate: new Date('2015 02 01'),
    fromTime: new Date(), toTime: new Date(),
    Duration: '00:30:00', participants: 5, status: 'in progress'
  },
  {
    fromDate: new Date('2015 02 01'), toDate: new Date('2015 02 01'),
    fromTime: new Date(), toTime: new Date(),
    Duration: '00:30:00', participants: 5, status: 'in progress'
  },
];

this.participants = [
  {id: 1, name: 'Ahmed Ahmed'},
  {id: 2, name: 'Mohamed Ahmed'}
]

}]);
