import { memo, useMemo } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  props: {
    title: string;
    poster: string;
    rating: string;
    runtime: string;
  }
}

export function MovieCardComponent({ props }: MovieCardProps) {
  const propsMemo = useMemo(() => {
    return props
  }, [props])
  return (
    <div className="movie-card">
      <img
        src={propsMemo.poster}
        alt={propsMemo.title}
      />

      <div>
        <div className="movie-info">
          <span>{propsMemo.title}</span>
          <div className="meta">
            <div>
              <Star /> {propsMemo.rating}
            </div>

            <div>
              <Clock /> {propsMemo.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MovieCard = memo(MovieCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.props, nextProps.props)
})
