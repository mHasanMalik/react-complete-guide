import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import '../Styles/Expenses.css'

function Expenses (props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.expenses_data[0].title} 
                amount={props.expenses_data[0].amount}
                date={props.expenses_data[0].date} />
                
            <ExpenseItem 
                title={props.expenses_data[1].title} 
                amount={props.expenses_data[1].amount}
                date={props.expenses_data[1].date} />

            <ExpenseItem 
                title={props.expenses_data[2].title} 
                amount={props.expenses_data[2].amount}
                date={props.expenses_data[2].date} />

            <ExpenseItem 
                title={props.expenses_data[3].title} 
                amount={props.expenses_data[3].amount}
                date={props.expenses_data[3].date} />
        </Card>
    );
}

export default Expenses;