import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAgents } from '../store/agentsSlice';
import Hero from '../Components/Hero';

export default function Agents() {
  const dispatch = useDispatch();
  const { data: agents, status, error } = useSelector((state) => state.agents);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAgents());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Yükleniyor...</p>;
  if (status === 'failed') return <p>Hata: {error}</p>;

  return (
    <>
      <Hero slug="temsilcilerimiz" />

      <section id="agents" className="agents section">
        <div className="container">
          <div className="row gy-5">
            {agents.map((agent) => (
              <div key={agent.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="pic">
                    <img src={agent.imageUrl} className="img-fluid" alt={agent.name} />
                  </div>
                  <div className="member-info">
                    <h4>{agent.name}</h4>
                    <span>{agent.departman}</span>
                    <div class="social">
                  <a href="https://www.twitter.com"><i class="bi bi-twitter-x"></i></a>
                  <a href="https://www.facebook.com"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com"><i class="bi bi-linkedin"></i></a>
                </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
