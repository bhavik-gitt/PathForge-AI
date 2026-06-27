from fastapi import FastAPI
import uvicorn

app = FastAPI(
    title="PathForge AI",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "PathForge AI Backend Running..."
    }

#run the app with uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="", port=3000, log_level="info")