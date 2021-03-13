import React from "react"
import { useSelector } from "react-redux"

function GameCard(props) {
    const state = useSelector(state => state)
    const currentCard = props.id === "P1" ? state.cards.card1 : state.cards.card2
    const cardTextStyle = { height: "9rem", fontSize: "1.5em" }
    const resultBadgeStyle = { fontSize: "1.5em" }

    const ResultBadge = () => state.players.winner === props.id ?
        <span style={resultBadgeStyle} className="badge badge-success">Winner</span> :
        <span style={resultBadgeStyle} className="badge badge-danger">Loser</span>

    const ResultBadgeDraw = () => <span style={resultBadgeStyle}
        className="badge badge-info">Draw</span>

    const BattleAttribute = () => Object.keys(currentCard).includes("mass") ?
        <div className="card-text" style={cardTextStyle}>Mass: {currentCard.mass}</div> :
        <div className="card-text" style={cardTextStyle}>Crew: {currentCard.crew}</div>

    const CardHeader = () =>
        <h5 style={{ fontWeight: "bold", fontSize: "1.5rem", height: "3rem", marginBottom: "3rem", marginTop: "3rem" }}>{currentCard.name}</h5>

    const LoadingCard = () => <h5 className="card-title"
        style={{ height: "18rem", fontSize: "1.5em" }}>Waiting to battle...</h5>

    return (
        <div className="card" style={{ width: "22rem" }}>
            {
                state.players.winner ?
                    (state.players.winner === "draw" ?
                        <ResultBadgeDraw /> :
                        <ResultBadge />) : null
            }
            <div className="card-body">
                {currentCard.name ? <CardHeader /> : <LoadingCard />}
                {(Object.keys(currentCard).length) ? <BattleAttribute /> : null}
            </div>
        </div>
    )
}

export default GameCard