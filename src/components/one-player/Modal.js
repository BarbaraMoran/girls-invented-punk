import React from "react";
import Portal from "../Portal";
import twitterBtn from "../../images/share-twitter.png";
import PlayAgainBtn from "./PlayAgainBtn";

export default class Modal extends React.Component {
  render() {
    const { playAgain, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div style={styles.wrapper}>
            <div style={styles.window}>
              <button style={styles.closeBtn} onClick={toggle}>
                x
              </button>
              <div>
                <h4>🎉HEY! You did it!🥳</h4>
                <p>🧠Playing this game is an excellent training.</p>
                <PlayAgainBtn playAgain={playAgain} />
                <a
                  target="_blank"
                  class="twitter-share"
                  href="https://twitter.com/intent/tweet?url=https://barbaramoran.github.io/girls-invented-punk/#/"
                >
                  <img src={twitterBtn} alt="twitter-share"></img>
                </a>
              </div>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}

const styles = {
  wrapper: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  window: {
    position: "relative",
    background: "#fff",
    padding: "15px",
    borderBottomLeftRadius: "22px",
    borderBottomRightRadius: "22px",
    borderTopLeftRadius: "22px",
    boxShadow: "1px 1px 5px #666",
    zIndex: "10",
    minWidth: "300px",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "black solid 3px",
    backgroundColor: "rgb(255, 255, 255)",
    fontFamily: "'Manrope', sans-serif",
    fontSize: "15px",
    textAlign: "center",
  },

  closeBtn: {
    position: "absolute",
    top: "0",
    right: "0",
    border: "none",
    backgroundColor: "rgb(255, 255, 255)",
    color: "#ff1179",
    fontWeight: "bold",
  },
};
