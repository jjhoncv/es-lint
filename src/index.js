import { Directions } from './model/Directions';
import { User } from './model/User';
import { Direction } from './model/Direction';
import { ShoppingCart } from './model/ShoppingCart';
import { Products } from './model/Products';
import { Product } from './model/Product';
import { Session } from './model/Session';

new Session(
	new User(
		'Jhonnatan',
		20,
		new Directions(
			new Direction('Av. Wenzara', 'Ate', true),
			new Direction('Jr. Bautista', 'Los Olivos'),
			new Direction('Calle Bautista', 'Miraflores')
		)
	),
	new ShoppingCart(
		new Products(new Product('Jabon', 10, 2.5), new Product('Ariel', 4, 1.2), new Product('Champu', 8, 8.3))
	)
);
