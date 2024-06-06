import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Review } from '../Type/Type'

interface ContextProps {
    Reviews: Review[];
    addReview: (review: Review) => void;
    removeReview: (id: number) => void;
}

const AppContext = createContext<ContextProps | undefined>(undefined);

export const useAppContext = ()=> {
    const context = useContext(AppContext)
    return context
}

const AppContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const ReviewsState = () => {
        let Reviews = localStorage.getItem("Reviews");

        if (Reviews) {
            return JSON.parse(localStorage.getItem("Reviews"))
        } else {
            return [];
        }
    }

    const [Reviews, setReviews] = useState(ReviewsState())

    const addReview = (Review: any) => {
        setReviews([...Reviews, Review])
    }

    const removeReview = (id: any) => {
        const OldReview = [...Reviews]
        const NewReview = OldReview.filter((Item) => Item.id !== id)
        setReviews(NewReview)
    }

    // const editReview = (id: any, EditedReview) => {
    //     const EditedReview = Reviews.map(Review:any => (Review.id === id ? EditedReview : Review));
    //     setReviews(EditedReview);
    // };

    useEffect(() => {
        localStorage.setItem("Reviews", JSON.stringify(Reviews))
    },[Reviews]);

    return (
        <AppContext.Provider value={{ Reviews, addReview, removeReview}} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;