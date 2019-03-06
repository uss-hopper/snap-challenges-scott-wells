
/*
 * FOREACH, TOUPPERCASE
 *
 * capitalize all the strings in the months array and store them in the new array
 */
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

months.forEach(month => {
	const makeitUppercase = month.toUpperCase();
	capitalizedMonths.push(makeitUppercase);
});

console.log(capitalizedMonths);

// /*
//  * FOREACH, IF, CHARAT, PUSH
//  *
//  * iterate over the colors array and store the hex colors that start with the letter "F" in the array
//  */
// const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
// let filteredColors = [];
//
// colors.forEach(color => {
// 	if(color.charAt(1) === "F") {
// 		filteredColors.push(color);
// 	}
// });
// console.log(filteredColors);
//
// /*
//  * FOREACH, IF, PUSH
//  * iterate over the percentages and store all percentages over 50% in the array
//  */
// const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
// let upperRange = [];
//
// percentages.forEach(percentage => {
// 	if(percentage > 50) {
// 		upperRange.push(percentage);
// 	}
// });
//
// console.log(upperRange);
//
//
// /*
//  * FOREACH, IF, PUSH
//  * store every letter from the alphabet in array, except 'l'
//  */
// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// let noel = [];
//
// alphabet.forEach(character => {
// 	if(character !== "L") {
// 		noel.push(character);
// 	}
// });
//
// console.log(noel);
//
//
// /**
//  * FOREACH, PARSEFLOAT
//  *
//  * turn stringPrices into floats and add them
//  */
//
// const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
// let priceTotal = 0;
//
// stringPrices.forEach(price => {
// 	const stringPrice = parseFloat(price);
// 	priceTotal = priceTotal + stringPrice;
// });
// // priceTotal should be: 32.92
// console.log(priceTotal);
//
//
// /**
//  * FOREACH, SLICE, PUSH
//  *
//  * new array should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
//  *
//  **/
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let dayAbbreviations = [];
//
// days.forEach(day => {
// 	const dayAbbreviation = day.slice(0, 2);
// 	dayAbbreviations.push(dayAbbreviation);
// });
//
// console.log(dayAbbreviations);
//
//
// /*
//  * FILTER
//  *
//  * Using the array filter prototype filter out all the words that start with the letter e.
//  */
// let string = "Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence.";
//
// const array = string.toLowerCase().split(" ");
//
// const newArray = array.filter(index => !index.startsWith("e"));
//
// console.log(newArray);
//
//
// /**
//  * MAP
//  *
//  * extract the geo object from all of the user objects using map
//  *
//  **/
// const users = [{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}}];
//
// const mappedArray = users.map(index => {
// 	return `${index.name}: ${index.address.geo}`;
// });
//
// console.log(mappedArray);
//
//
// /**
// * REDUCE, SPLIT
// *
// * using reduce reverse this string.
// **/
// let string = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";
//
// let newString = string.split("a");
//
// let finalString = newString.reduce((acc, val) => val + acc);
//
// console.log(finalString);
//
//
// /**
//  * SPLIT, REDUCE, REVERSE, JOIN
//  *
//  * using reduce reverse this string
//  *
//  **/
// let array = string.split(" ");
//
// let reducer = (acc, val) => acc + val;
//
// let newArray = array.reverse().reduce(reducer);
// let newArray = array.reverse().join(" ");
//
//
// /**
//  * REDUCE
//  *
//  * use reduce to multiply this array
//  *
//  **/
// const array = [1,2,3,5,8,13,21,34];
//
// const total = (acc, val) => acc * val;
//
// console.log(array.reduce(total));
//
//
// /**
//  * MAP
//  *
//  * turn the array below into a bootstrap card deck using javascript map
//  *
//  **/
// const posts =  [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];
//
// window.onload = () => {
// 	let renderedPosts = posts.map((index) => {
// 		return `
//     		<div class="card">
//   				<div class="card-body">
//    				<h5 class="card-title">${index.title}</h5>
//     				<p class="card-text">${index.body}</p>
//   				</div>
//   			</div>
//    	 `
// 	});
//
// 	let target = document.getElementById('target');
// 	target.innerHTML = renderedPosts.join("\r\n");
// 	//console.log(renderedPosts.toString());
// }
//
//
// /**
//  * FILTER
//  *
//  * using javascript convert the string into an array and filter out any words that begin with the letter 'f'
//  *
//  **/
// let string = "Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.";
//
// const array = string.toLowerCase().split(" ");
//
// const newArray = array.filter(index => !index.startsWith("f"));
//
// console.log(newArray);
//
//
// /**
//  * FILTER
//  *
//  * using javascript and the filter array method remove all post from userId:5 from the array
//  *
//  **/
// const array = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":3,"id":30,"title":"a quo magni similique perferendis","body":"alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"},{"userId":4,"id":31,"title":"ullam ut quidem id aut vel consequuntur","body":"debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"},{"userId":5,"id":45,"title":"ut numquam possimus omnis eius suscipit laudantium iure","body":"est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"},{"userId":5,"id":46,"title":"aut quo modi neque nostrum ducimus","body":"voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"}];
//
// const newArray = array.filter(index => index.userId !== 5);
//
// console.table(newArray);
//
//
// /**
//  * MAP
//  *
//  * using javascript map array prototype and concatenation combine the post body with the post title.
//  * to access the object, we may need to go two levels deep -- console.log(array[1.title]); -- object in an array
//  * backticks keep track of ALL whitespace in between, including spaces and returns
//  *
//  **/
// const array = [{"userId":1,"id":1,"title":"Title 1","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"Title 2","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"Title 3","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"Title 4","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"Title 5","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];
//
// const newArray = array.map(index => {
// 	return `${index.title}: ${index.body}`;
// });
//
// console.log(newArray);
//
//
// /**
//  * MAP
//  *
//  * delete only the "address" object from this array using map()
//  *
//  **/
// const newArray = array.map(index => {
// 	return {id:index.id, name:index.name, email:index.email, phone:index.phone, website:index.website};
// });
//
// console.log(newArray);
//
//
// /**
//  * FOR EACH
//  *
//  * delete only the "company" object from this array using forEach()
//  *
//  **/
// let users = [{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}}];
//
// newUsers = users;
//
// newUsers.forEach(user => {
// 	delete user.address;
// });
//
// console.table(newUsers);
//
//
// /**
//  * FOR EACH
//  *
//  * multiply index of an array by all other indexes using forEach()
//  *
//  **/
// const array = [1,2,3,5,8,13,21,34]
// var total = 1;
// var total1 = 1;
//
// value1 = array.forEach(
// 	function(index) {
// 		total = index * total;
// 	}
// );
//
// value2 = array.forEach( (index) => {
// 	return total1 = total1 * index;
// });
// console.log(total);












