import CheckoutView from 'views/checkout/CheckoutView'
import CompleteView from 'views/checkout/CompleteView'
import PaymentView from 'views/checkout/PaymentView'
import FlightInformationView from 'views/checkout/FlightInformationView'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default [
  {
    path: '/checkout',
    component: CheckoutView,
    routes: [
      {
        path: '/checkout/flight-information',
        component: FlightInformationView
      },
      {
        path: '/checkout/payment',
        component: PaymentView
      },
      {
        path: '/checkout/complete',
        component: CompleteView
      }
    ]
  }
]
