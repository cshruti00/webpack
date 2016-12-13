// import * as styles from "!style!css!./styleSheet.css";
import content from "./content";

module.exports = {
	getIt : () => {
		console.log(getValue());
		return content.getValue()+" is a number";
	}
}
