import styled from "styled-components"

export const RecipeWrapper = styled.div`
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-flow: column;
  margin: auto;
  padding: 8px;
`

export const detailWrapper = {
  backgroundColor: "#EFF0DE",
  width: "1000px",
  display: "flex",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "justify",
  fontSize: "18px",
}

export const leftDetail = {
  backgroundColor: "#96B68A",
  border: "1px solid brown",
  height: "500px",
  padding: "15px",
  flex: 2,
  borderRadius: "10px",
}
export const rightDetail = {
  backgroundColor: "#F6B66A",
  border: "1px solid brown",
  height: "500px",
  padding: "15px",
  flex: 1,
  borderRadius: "10px",
  textAlign: "Center",
}

export const nameStyle = {
  textAlign: "center",
  color: "white",
  fontSize: "20px",
  marginBottom: "10px",
}

export const ingStyle = {
  fontSize: "20px",
  margin: "15px 0px",
  border: "1px solid white",
  borderRadius: "10px",
  padding: "5px",
}
