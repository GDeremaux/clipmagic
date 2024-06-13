import { CircleCheck } from 'lucide-react';

interface FormErrorProps {
  message?: string;
}

const FormSuccess = ({
  message
}: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 border border-emerald-500/15">
      <CircleCheck className="min-h-4 min-w-4 h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

export default FormSuccess;