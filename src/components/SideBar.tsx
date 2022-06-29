import { useCallback } from "react";
import { useMovie } from "../movieContext";
import { Button } from "./Button";

export function SideBar() {

  const { genres, handleClickButton, selectedGenreId } = useMovie()

  const handleClickButtonCallBack = useCallback((id: number) => {
    handleClickButton(id)
  }, [])

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            Btn={
              {
                title: genre.title,
                iconName: genre.name,
                selected: selectedGenreId === genre.id
              }
            }
            // title={genre.title}
            // iconName={genre.name}
            onClick={() => handleClickButtonCallBack(genre.id)}
          // selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
