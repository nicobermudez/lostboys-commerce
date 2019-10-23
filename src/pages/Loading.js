import React from 'react';
import { css } from "emotion";

export const Loading = () => {
    
    return (
        <div className="LoadingScreen"
            css={css`
                padding: 40px;
                font-size: 40px;
            `}
        >
            <h1>Loading</h1>
        </div>

    )
}